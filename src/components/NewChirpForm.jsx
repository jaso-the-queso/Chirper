import React, { Component } from 'react';
import ChirpHeader from './ChirpHeader';
import ChirpInputBox from './ChirpInputBox';

class NewChirpForm extends Component {
    render() { 
        return (
            <div>
                <ChirpHeader />
                <ChirpInputBox />
            </div>
        );
    };
};

export default NewChirpForm;