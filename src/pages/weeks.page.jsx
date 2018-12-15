import React, { Component } from 'react';

class WeeksPage extends Component {

    newWeekCard() {
        return (
            <div className="col-3 mb-3">
                <div className="card border-0 bg-success text-light clickable">
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

    existingWeekCards() {
        return this.props.weeks.map((week, index) => {
            return (
                <div className="col-3 mb-3" key={week.uuid}>
                    <div className="card border-0 bg-light clickable">
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
                {this.newWeekCard()}
                {this.existingWeekCards()}
            </div>
        );
    }

} // end WeeksPage component

export default WeeksPage;