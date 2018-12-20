import React, { Component } from 'react';

class WeeksPage extends Component {

    constructor(props) {
        super(props);

        this.gotoNewWeekHandler = this.gotoNewWeekHandler.bind(this);
        this.gotoEditWeekHandler = this.gotoEditWeekHandler.bind(this);
    }

    gotoNewWeekHandler() {
        this.props.changePageHandler(this.props.pageStates.CREATE_WEEK);
        this.props.changeSelectedWeekHandler();
    }

    gotoEditWeekHandler(weekUuid) {
        this.props.changePageHandler(this.props.pageStates.EDIT_WEEK);
        // this.props.changeSelectedWeekHandler(weekUuid);
    }

    renderNewWeekCard() {
        return (
            <div className="col-3 mb-3">
                <div className="card border-0 bg-success text-light clickable" onClick={this.gotoNewWeekHandler}>
                    <div className="card-body">
                        <h5 className="card-title">New Week <i className="fas fa-plus fa-pull-right"></i></h5>
                        <div className="mb-2">
                            <span className="badge badge-info mr-1"><i className="fas fa-building"></i> ???</span>
                            <span className="badge badge-secondary">???</span>
                        </div>
                        <div className="small">
                            <i className="fas fa-question mr-1"></i>
                            <i className="fas fa-question mr-1"></i>
                            <i className="fas fa-question mr-1"></i>
                            <i className="fas fa-question mr-1"></i>
                            <i className="fas fa-question mr-1"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderExistingWeekCards() {
        return this.props.weeks.map((week, index) => {
            return (
                <div className="col-3 mb-3" key={week.uuid}>
                    <div className="card border-0 bg-light clickable" onClick={this.gotoEditWeekHandler}>
                        <div className="card-body">
                            <h5 className="card-title">{week.title} <i className="fas fa-pencil-alt fa-pull-right"></i></h5>
                            <div className="mb-2">
                                <span className="badge badge-info mr-1">
                                    <i className="fas fa-building"></i> {week.company}
                                </span>
                                <span className="badge badge-secondary">
                                    <i className="fas fa-calendar"></i> {week.year}
                                </span>
                            </div>
                            <div className="small">
                                {this.existingWeekCardDays(week.days)}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    existingWeekCardDays(days) {
        if (! days || days.length <= 0) {
            return null;
        }
        
        return days.map((day, index) => {
            return <i className={day.daytype.icon} key={day.uuid}></i>;
        });
    }

    render() {
        return (
            <div className="row">
                {this.renderNewWeekCard()}
                {this.renderExistingWeekCards()}
            </div>
        );
    }

} // end WeeksPage component

export default WeeksPage;