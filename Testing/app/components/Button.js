import React from "react";

function Button({ label }){
    const btnAlert = () => alert("clicked")

    return (
        <div 
            data-testid="button" 
            onClick={btnAlert}
        >
            {label}
        </div>
    )
}

export default Button;