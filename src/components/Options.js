import React from 'react';
import Option from './Option';

const Options = (props) => {
    const options = props.options;
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {options.length === 0 && <p>Please add option to get Started!</p>}
            {
                options.map((option) => 
                    <Option 
                        key={option} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption} 
                    />)
            }
        </div>
    );
}

export default Options;