import React from 'react';

const PWDOptions = (props) => {
    const chevronDown = <button onClick={props.toggleAdvanced} className='chevronBttn'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'/></svg></button>;

    const baseView = (
        <div>
            <h2>Set your preferences</h2>
            <h4>Password length</h4>
            <div className='rangeSlider'>
              <input className='rangeSliderRange' type='range' min='6' max='25' step='1' onChange={props.onSlide}/>
              <span className='rangeSliderValue'>{props.requestedLength}</span>
            </div>
            <h4>Advanced {chevronDown}</h4>
        </div>
    );

    const displayAdvancedSettings = () => {
        stateChecker();

        let advancedSettings = Object.keys(availableAdvancedSettings).map((obj, i) =>
            <div key={availableAdvancedSettings[obj].id}>
                <input type='checkbox' 
                    id={availableAdvancedSettings[obj].id} 
                    onChange={props.onPrefChange} 
                    defaultChecked={availableAdvancedSettings[obj].prop}
                />
                <label htmlFor={availableAdvancedSettings[obj].id}>{availableAdvancedSettings[obj].label}</label>
            </div>
        );
        return advancedSettings;
    };

    const availableAdvancedSettings = {
        symbols: {
            id: 'symbols',
            prop: 'checked',
            label: 'Include symbols',
        },
        numbers: {
            id: 'numbers',
            prop: '',
            label: 'Include numbers'
        },
        upperChar: {
            id: 'upperChar',
            prop: '',
            label: 'Include uppercase characters'
        },
        lowerChar: {
            id: 'lowerChar',
            prop: '',
            label: 'Include lowercase characters'
        }
    };

    const stateChecker = () => {

        let sentProperties = [props.allowSymbols, props.allowNumbers, props.allowUpChar, props.allowLowChar],
            settingNames = Object.keys(availableAdvancedSettings);

        for (let i = 0; i < sentProperties.length; i++) {
            if (sentProperties[i]) {
                availableAdvancedSettings[settingNames[i]].prop = 'checked';
            }
            else {
                availableAdvancedSettings[settingNames[i]].prop = '';
            };
        };
    };

    // What we actually want to return
    if (props.showAdvanced) {
        return (
            <div className='PWDOptions'>
                {baseView}
                {displayAdvancedSettings()}
            </div>
        );
    }
    else {
        return (
            <div className='PWDOptions'>
                {baseView}
            </div>
        );

    }
};

export default PWDOptions;
