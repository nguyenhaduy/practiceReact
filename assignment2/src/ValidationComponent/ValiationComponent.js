import React from 'react';

const validationComponent = ( probs ) => {
    let validationMessage = 'Text long enough';

    if (probs.inputLength <= 5) {
        validationMessage = 'Text too short';
    }

    return (
        <div>
            <p>{validationMessage}</p>
            {/* {
                probs.inputLength > 5 ? 
                    <p>Text long enough</p> :
                    <p>Text too short</p>
            }        */}
        </div>
    );
}

export default validationComponent;