import React from 'react';

const PWDOptions = (props) => {
    return (
        <div className='PWDOptions'>
            <h2>Set your preferences</h2>
            <h4>Password length</h4>
            <div class="rangeSlider">
              <input class="rangeSliderRange" type="range" value="100" min="0" max="500" />
              <span class="rangeSliderValue">0</span>
            </div>
            <h4>Advanced</h4>
            <div className='advancedOptions'>
                <div>
                    <input type='checkbox' id='symbols' />
                    <label for='symbols'>Include symbols</label>
                </div>
                <div>
                    <input type='checkbox' id='numbers' />
                    <label for='numbers'>Include numbers</label>
                </div>
                <div>
                    <input type='checkbox' id='upperChar' />
                    <label for='upperChar'>Include uppercase characters</label>
                </div>
                <div>
                    <input type='checkbox' id='lowerChar' />
                    <label for='lowerChar'>Include lowercase characters</label>
                </div>
            </div>
        </div>
    );
};

export default PWDOptions;
