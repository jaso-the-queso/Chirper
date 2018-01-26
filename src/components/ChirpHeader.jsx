import React, { Component } from 'react';

class ChirpHeader extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container ">
                    <h1 className="display-4 text-center">Welcome to Chirper</h1>
                    <p className="lead text-center">Tell us something cool</p>
                </div>
            </div>
        );
    };
};

export default ChirpHeader;