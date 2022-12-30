import React from "react";
import { useState } from "react";
import Props from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        console.log(event.target)
            const { name, value } = event.target;

            setNote(prevNote => {
                return {
                    ...prevNote,
                    [name]: value
                };

            });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
           <form className="create-note">
                <input 
                type="text" 
                name="title" 
                onChange={handleChange}
                value={note.title}
                placeholder="Title"
                />
                <textarea 
                name="content" 
                rows="3"
                onChange={handleChange}
                value={note.title}
                placeholder="Take a note"
                />
                <Fab onClick={submitNote}>
                    <AddIcon />

                </Fab>
           </form>
        </div>
    )
}

export default CreateArea;