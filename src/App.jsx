import React, { Component } from 'react';

/**
 * The parent component which holds and monitors all necessary
 * props and states that the children components need.
 */
class App extends Component {

    render() {
        <div id="main">
            <nav className="mt-1" ariaLabel="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" ariaCurrent="page">Tasks</li>
                </ol>
            </nav>

            <h2 className="border-bottom pb-1 mb-3"><i className="fas fa-file-alt"></i> Tasks</h2>
        </div>
    }

}; // end App

export default App;