import React from "react";
import HighlightIcon from '@material-ui/icons/Highlight';

function Header() {
    return (
        <header>
            <h1>
                <HighlightIcon />
                TodoList
            </h1>
        </header>
    );
}

export default Header;