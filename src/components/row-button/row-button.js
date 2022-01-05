import React from "react";
import "./row-button.scss";

const RowButton = ({name, onClick, type, color}) => {
    return (
        <button
            type={type}
            className="RowButton"
            onClick={onClick}
            style={{color: color,}}
        >
            {name}
        </button>
    );
};

export default RowButton;