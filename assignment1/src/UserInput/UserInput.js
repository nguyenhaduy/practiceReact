import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <input type="test" onChange={props.changed} value={props.userName}/>
        </div>
    );
}

export default userInput;