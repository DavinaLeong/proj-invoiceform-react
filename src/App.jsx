import React, { Component } from 'react';
import states from './constants/states';

/**
 * The parent component which holds and monitors all necessary
 * props and states that the children components need.
 */
class App extends Component {

    render() {
        return (
            <div id="main">
                <nav className="mt-1" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">Tasks</li>
                    </ol>
                </nav>

                <h2 className="border-bottom pb-1 mb-3">
                    <i className="fas fa-file-alt"></i> Tasks</h2>
            </div>
        );
    }

}; // end App

export default App;