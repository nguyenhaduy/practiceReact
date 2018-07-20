import React from 'react';

const charComponent = (probs) => {
    const style = {
        display: "inline-block",
        padding: "16px", 
        textAlign: "center", 
        margin: "16px", 
        border: "1px solid black"
    };

    return (
        <div style={style} onClick={probs.clicked}>
            {probs.character}
        </div>
    );
}

export default charComponent;