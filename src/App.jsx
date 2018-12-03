import React, { Component } from 'react';

import BreadcrumbComponent from './components/breadcrumb/breadcrumb.component.jsx';
import TitleComponent from './components/title/title.component.jsx';
import LegendComponent from './components/legend/legend.component.jsx';

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
                <BreadcrumbComponent
                    pageStates={this.props.pageStates}
                    currentPage={this.state.page.current}
                    changePage={this.changePage} />

                <TitleComponent page={this.state.page.current} />
                <LegendComponent />


            </div>
        );
    }

} // end App component

export default App;