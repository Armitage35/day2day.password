import React from 'react';

const PWDRender = (props) => {
    if (props.ready) {
        return (
            <div>
                <div className='passwordRender'>
                    <textarea id='generatedPassword' rows="1" cols="26" value={props.pwd} readOnly onClick={props.onClick}></textarea>
                    <button className='bttn-material-flat bttn-sm bttn-warning' id='copy' onClick={props.onClick}>Copy</button>
                </div>
            </div>
        );
    }
    else {
        return null;
    }
};

export default PWDRender;
