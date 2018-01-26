import React, { Component } from 'react';
import ChirpList from './ChirpList'

// *** START HERE *** This is creating an input box and a button on load. Here we are creating the constructor with the props and such. MOVE TO this.state...
class ChirpInputBox extends Component {
    constructor(props) {
        super(props);

        /* Here we are creating two states. message is creating an empty string that we will later fill in with text from the input box. postedMessage is 
        going to be the chirp array in which we will push new chirps to once the "Post!" button is clicked. MOVE TO updateMessage(value)... */
        this.state = {
            message: '',
            postedMessage: ["Second chirp!", "First Chirps!" ]
        };
    };

    /* Within this function, we are passing in the parameter 'value'. We are setting the state (this.setState) within this function by referencing 'message'
    and assigning the parameter 'value' to it. This function will be called when we use the input box. MOVE TO buttonClick(value)... */
    updateMessage(value) {
        this.setState({ message: value })
        console.log({ message: value })
    };

    /* Within this function, we are passing in the parameter 'value'. The purpose of this function is to push new chirps written in the input box to the 
    postedMessage array whenever the 'Post!' button is clicked. First, this function is creating the const currentChirps, which is equal to the current 
    spread (... = spread) of the this.state.postedMessage. Then, we will call currentChirps and push whatever will later be put into the value parameter
    into the postedMessage array. Finally, we will set a new state for postedMessage where postedMessage will be equal to currentChirps. MOVE TO THE render()
    method. */
    buttonClick(value) {
        const currentChirps = [...this.state.postedMessage];
        currentChirps.unshift(value);
        this.setState({ postedMessage: currentChirps });
    };
    
    /* With render(), we are rendering html elements that will be exported later to the index.js file. MOVE TO THE <input /> FIELD... */
    render() {
        return (
            <div>

                <div className="container border rounded">
                    <p className="align-baseline pt-4">Create a Chirp:</p>

                    {/* In this input field, we are giving it the value of the state 'message', which was established in the ChirpInputBox constructor 
                    (message ='', btw). Then, we type in 'onChange={(event) => { this.updateMessage(event.target.value) }}' which is an event that watches
                    the keyboard for key presses and sends that info into the 'value' parameter in the updateMessage function above. MOVE TO <button>
                    </button>... */}
                    <input 
                    className="form-control" 
                    type="text" 
                    placeholder="Type here..." 
                    value={this.state.message}
                    onChange={(event) => { this.updateMessage(event.target.value) }} />

                    {/* In this button box, we are running an event called 'onClick={() => { this.buttonClick(this.state.message)}}' that is executing 
                    the buttonClick function once the 'Post!' function is called. Once clicked, this.state.message is passed into the value parameter
                    of buttonClick, where it will be pushed to the 'postedMessage' array. MOVE TO <ChirpList>... */}
                    <button 
                    type="button" 
                    className="btn btn-primary btn-lg btn-block mt-3 mb-4"
                    onClick={() => { this.buttonClick(this.state.message)}}>Post!
                    </button>
                </div>
                
                {/* ChirpList is where all the chirps will be posted. Items equal to {this.state.postedMessage} which will be used in the ChirpList.jsx file.
                MOVE TO ChirpList.jsx FILE... */}
                <ChirpList items={this.state.postedMessage} />

            </div>
        );
    };
};

export default ChirpInputBox;