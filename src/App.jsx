import React, { Component } from 'react';

import Breadcrumb from './components/breadcrumb/Breadcrumb.jsx';

/**
 * The parent component which holds and monitors all necessary
 * props and states that the children components need.
 */
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            page: {
                previous: this.props.pageStates.CREATE_TASK,
                current: this.props.pageStates.CREATE_TASK
            }
        };

        this.changePage = this.changePage.bind(this);
    }

    changePage(page) {
        if (this.props.pageStates.array.includes(page)) {
            const oldCurrent = this.state.page.current;
            this.setState({
                page: {
                    previous: oldCurrent,
                    current: page
                }
            });
        }
    }

    render() {
        return (
            <div id="main">
                <Breadcrumb
                    pageStates={this.props.pageStates}
                    currentPage={this.state.page.current}
                    changePage={this.changePage} />

                <h2 className="border-bottom pb-1 mb-3">
                    <i className="fas fa-file-alt"></i> Tasks</h2>
            </div>
        );
    }

}; // end App component

export default App;