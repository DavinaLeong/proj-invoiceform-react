import React, { Component } from 'react';

import BreadcrumbComponent from './components/breadcrumb/breadcrumb.component.jsx';
import TitleComponent from './components/title/title.component.jsx';
import LegendComponent from './components/legend/legend.component.jsx';

import TasksPage from './pages/tasks.page.jsx';
import NewWeekPage from './pages/new-week.page.jsx';
import EditWeekPage from './pages/edit-week.page.jsx';

// import WeekModel from './models/weeks/week.model';
import DayTypeModel from './models/daytype/daytype.model';

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

    componentDidMount() {
        console.log('DEBUGGING CODE');

        console.log(DayTypeModel.findAll());
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

    currentPage() {
        switch(this.state.page.current) {
            case this.props.pageStates.TASKS:
                return <TasksPage database={this.props.database} />;

            case this.props.pageStates.CREATE_TASK:
                return <NewWeekPage />;

            case this.props.pageStates.EDIT_TASK:
                return <EditWeekPage />;

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

                {this.currentPage()}
            </div>
        );
    }

} // end App component

export default App;