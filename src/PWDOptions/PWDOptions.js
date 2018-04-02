import React from 'react';

const chevronDown = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"/></svg>;

const PWDOptions = (props) => {
    return (
        <div className='PWDOptions'>
            <h2>Set your preferences</h2>
            <h4>Password length</h4>
            <div className='rangeSlider'>
              <input className='rangeSliderRange' type='range' min='0' max='25' />
              <span className='rangeSliderValue'>0</span>
            </div>
            <h4>Advanced {chevronDown}</h4>
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
