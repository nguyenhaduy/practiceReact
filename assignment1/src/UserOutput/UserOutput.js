import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>Hello from the other side.</p>
            <p>My name is: {props.userName}.</p>
        </div>
    );
}

export default userOutput;