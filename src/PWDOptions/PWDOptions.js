import React from 'react';

const PWDOptions = (props) => {
    return (
        <div className='PWDOptions'>
            <h2>Set your preferences</h2>
            <h4>Password length</h4>
            <div className='rangeSlider'>
              <input className='rangeSliderRange' type='range' min='0' max='25' />
              <span className='rangeSliderValue'>0</span>
            </div>
            <h4>Advanced</h4>
            <div className='advancedOptions'>
                <div>
                    <input type='checkbox' id='symbols' />
                    <label htmlFor='symbols'>Include symbols</label>
                </div>
                <div>
                    <input type='checkbox' id='numbers' />
                    <label htmlFor='numbers'>Include numbers</label>
                </div>
                <div>
                    <input type='checkbox' id='upperChar' />
                    <label htmlFor='upperChar'>Include uppercase characters</label>
                </div>
                <div>
                    <input type='checkbox' id='lowerChar' />
                    <label htmlFor='lowerChar'>Include lowercase characters</label>
                </div>
            </div>
        </div>
    );
};

export default PWDOptions;
