import React, { Component } from 'react';
import moment from 'moment';

import DaytypeModel from './../models/daytype/daytype.model';
import formats from './../lib/formats';

class NewWeekPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedWeek: this.props.selectedWeek.current
        };
    }

    titleChangeHandler(event) {
        this.updateSelectedWeek('title', event.target.value);
    }

    companyChangeHandler(event) {
        this.updateSelectedWeek('company', event.target.value);
    }

    yearChangeHandler(event) {
        this.updateSelectedWeek('year', event.target.value);
    }

    updateSelectedWeek(key, value) {
        const selectedWeek = this.state.selectedWeek;
        selectedWeek[key] = value;

        this.setState({ selectedWeek: selectedWeek });
    }

    dateChangeHandler(dayIndex, event) {
        this.updateDay(dayIndex, 'date', event.target.value);
    }

    tasksChangeHandler(dayIndex, event) {
        this.updateDay(dayIndex, 'tasks', event.target.value)
    }

    updateDay(dayIndex, key, value) {
        const selectedWeek = this.state.selectedWeek;
        selectedWeek.days[dayIndex][key] = value;

        this.setState({ selectedWeek: selectedWeek });
    }

    renderDaysFields(week) {
        if (! week.days) {
            return null;
        }

        return week.days.map((day, index) => {
            let daytype = DaytypeModel.findByUuid('e6b2ba74-7a1a-4d72-a2e1-85e5edbbdf49');
            if (day.daytype) {
                daytype = day.daytype;
            }
            return (
                <div id={'entry'+index} className="card border-0 bg-secondary-light mb-2" key={day.uuid}>
                    <div className="card-body">
                        <button type="button" className="btn btn-outline-secondary btn-sm float-right"><i className="fas fa-times"></i></button>
                        <h5 className="card-title">Entry {index+1}</h5>

                        <div className="form-group row">
                            <label htmlFor={'date'+0} className="col-sm-2 col-form-label">Date <span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <input id={'date'+0} type="date" className="form-control form-control-lg"
                                    placeholder="DD MMM" value={day.date} required
                                    onChange={this.dateChangeHandler.bind(this, index)}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor={'type'+0} className="col-sm-2 col-form-label">Day Type <span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><i className={daytype.icon}></i></span>
                                    </div>
                                    <select type="text" className="form-control" id={'type'+0}
                                        required value={daytype.value}>
                                        {this.renderDaytypeOptions()}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor={'tasks'+0} className="col-sm-2 col-form-label">Tasks <span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <textarea id={'tasks'+0} className="form-control" rows="8" value={day.tasks} required
                                    onChange={this.tasksChangeHandler.bind(this, index)}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    }

    renderDaytypeOptions() {
        return this.props.daytypes.map((daytype, index) => {
            return (<option value={daytype.value} key={daytype.uuid}>{daytype.label}</option>);
        });
    }

    render() {
        const week = this.state.selectedWeek;

        let daysCount = 0;
        if (week.days) {
            daysCount = week.days.length;
        }

        return (
            <form id="form-existing-week">
                <fieldset>
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Title <span className="text-danger">*</span></label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control form-control-lg" id="title" placeholder="Week ##"
                                value={week.title} maxLength="50" required
                                onChange={this.titleChangeHandler.bind(this)}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="company" className="col-sm-2 col-form-label">Company <span className="text-danger">*</span></label>
                        <div className="col-sm-8">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="comapny-addon"><i className="fas fa-building"></i></span>
                                </div>
                                <input type="text" className="form-control" id="company" placeholder="Company"
                                    value={week.company} maxLength="50" required
                                    onChange={this.companyChangeHandler.bind(this)}/>
                            </div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="Year" className="col-sm-2 col-form-label">Year <span className="text-danger">*</span></label>
                        <div className="col-sm-8">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="year-addon"><i className="fas fa-calendar"></i></span>
                                </div>
                                <input type="number" className="form-control" id="Year" placeholder="Year"
                                    value={week.year} min="0" step="1" required
                                    onChange={this.yearChangeHandler.bind(this)}/>
                            </div>
                        </div>
                    </div>
                </fieldset>
                <br/>

                <fieldset>
                    <p className="text-left font-italic text-secondary
                        small">Total entries: {daysCount}</p>
                    {this.renderDaysFields(week)}
                    <p className="text-left font-italic text-secondary
                        small">Total entries: {daysCount}</p>
                </fieldset>

                <div className="form-group row">
                    <div className="col-sm-12 text-right">
                        <button type="button" className="btn btn-outline-primary btn-sm"><i className="fas fa-plus"></i></button>
                    </div>
                </div>


                <div className="form-group row">
                    <div className="col-sm-12">
                        <p className="small text-danger float-left">* required</p>
                        <div className="float-right text-right">
                            <a href="./tasks.html" className="btn btn-outline-secondary mr-1"><i className="fas fa-ban"></i> Cancel</a>
                            <button type="button" className="btn btn-primary"><i className="fas fa-check"></i> Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }

} // end NewWeekPage

export default NewWeekPage;