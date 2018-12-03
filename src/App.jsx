import React, { Component } from 'react';

import Breadcrumb from './components/breadcrumb/breadcrumb.component.jsx';
import Title from './components/title/title.component.jsx';
import Legend from './components/legend/legend.component.jsx';

/**
 * The parent component which holds and monitors all necessary
 * props and states that the children components need.
 */
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            page: {
                previous: this.props.pageStates.TASKS,
                current: this.props.pageStates.TASKS
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

                <Title page={this.state.page.current} />

                <Legend />
            </div>
        );
    }

} // end App component

export default App;