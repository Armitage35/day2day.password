import React from 'react';

const PWDRender = (props) => {
    if (props.ready) {
        return (
            <div>
                <div className='passwordRender'>
                    <p className='generatedPassword'>{props.pwd}</p>
                    <button className='bttn-material-flat bttn-sm bttn-warning' onClick={props.copy}>Copy</button>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default PWDRender;
