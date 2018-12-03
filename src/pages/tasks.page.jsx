import React, { Component } from 'react';

class TasksPage extends Component {

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
                            <i className="fas fa-question"></i>
                            <i className="fas fa-question"></i>
                            <i className="fas fa-question"></i>
                            <i className="fas fa-question"></i>
                            <i className="fas fa-question"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    existingWeekCards() {
        return this.props.database.tasks.map((task, index) => {
            return (
                <div className="card border-0 bg-light clickable" key={'w'+index}>
                    <div className="card-body">
                        <h5 className="card-title">{task.title} <i className="fas fa-pencil-alt fa-pull-right"></i></h5>
                        <div className="mb-2">
                            <span className="badge badge-info mr-1"><i className="fas fa-building"></i> {task.company}</span>
                            <span className="badge badge-secondary"><i className="fas fa-calendar"></i> {task.year}</span>
                        </div>
                        <div className="small">
                            {this.existingWeekCardDays(task.days, index)}
                        </div>
                    </div>
                </div>
            );
        });
    }

    existingWeekCardDays(days, weekIndex) {
        return days.map((day, index) => {
            const dayType = this.props.database.dayTypes[day.type];
            return <i className={dayType.icon} key={'w'+weekIndex+'d'+index}></i>;
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

} // end Tasks component

export default TasksPage;