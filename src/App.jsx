import React, { Component } from 'react';

import BreadcrumbComponent from './components/breadcrumb/breadcrumb.component.jsx';
import TitleComponent from './components/title/title.component.jsx';
import LegendComponent from './components/legend/legend.component.jsx';

import WeeksPage from './pages/weeks.page.jsx';
import NewWeekPage from './pages/new-week.page.jsx';
import EditWeekPage from './pages/edit-week.page.jsx';

// import DaytypeModel from './models/daytype/daytype.model';
import WeekModel from './models/week/week.model';

/**
 * The parent component which holds and monitors all necessary
 * props and states that the children components need.
 */
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            page: {
                previous: this.props.pageStates.WEEKS,
                current: this.props.pageStates.WEEKS
            },
            weeks: this.props.weeks,
            selectedWeek: {
                previous: null,
                current: null
            }
        };

        this.changePageHandler = this.changePageHandler.bind(this);
        this.changeSelectedWeekHandler = this.changeSelectedWeekHandler.bind(this);
        this.createWeek = this.createWeek.bind(this);
    }

    changePageHandler(page) {
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

    changeSelectedWeekHandler(weekUuid) {
        if (weekUuid) {
            const selectedWeek = this.state.weeks
                .find(week => week.uuid === weekUuid);
            this.setState({
                selectedWeek: {
                    previous: selectedWeek,
                    current: selectedWeek
                }
            });
        }

        this.setState({
            selectedWeek: {
                previous: this.props.newWeekSchema,
                current: this.props.newWeekSchema
            }
        });
    }

    createWeek(selectedWeek) {
        this.setState({
            weeks: this.state.weeks.push(selectedWeek)
        });
    }

    renderCurrentPage() {
        switch(this.state.page.current) {
            case this.props.pageStates.WEEKS:
                return <WeeksPage
                    weeks={this.state.weeks}
                    pageStates={this.props.pageStates}
                    changePageHandler={this.changePageHandler}
                    changeSelectedWeekHandler={this.changeSelectedWeekHandler} />;

            case this.props.pageStates.CREATE_WEEK:
                return <NewWeekPage
                    daytypes={this.props.daytypes}
                    selectedWeek={this.state.selectedWeek}
                    createWeek={this.createWeek} />;

            case this.props.pageStates.EDIT_WEEK:
                return <EditWeekPage
                    daytypes={this.props.daytypes}
                    selectedWeek={this.state.selectedWeek} />;

        }
    }

    render() {
        return (
            <div id="main">
                <BreadcrumbComponent
                    pageStates={this.props.pageStates}
                    currentPage={this.state.page.current}
                    changePage={this.changePageHandler} />

                <TitleComponent page={this.state.page.current} />
                <LegendComponent />

                {this.renderCurrentPage()}
            </div>
        );
    }

} // end App component

export default App;