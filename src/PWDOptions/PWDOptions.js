import React from 'react';
import './PWDOptions.css'

const PWDOptions = (props) => {
    return (
        <div className='PWDOptions'>
            <h2>Set your preferences</h2>
            <h4>Password length</h4>
            <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
            <h4>Advanced</h4>
        </div>
    );
};

export default PWDOptions;
