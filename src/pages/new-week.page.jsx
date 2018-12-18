import React, { Component } from 'react';

import DaytypeModel from './../models/daytype/daytype.model';

class NewWeekPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedWeek: this.props.selectedWeek
        };
    }

    daysFields(week) {
        if (! week.days) {
            return null;
        }

        return week.days.map((day, index) => {
            let daytype = DaytypeModel.findByUuid('e6b2ba74-7a1a-4d72-a2e1-85e5edbbdf49');
            if (day.daytype) {
                daytype = day.daytype;
            }
            if (day)
            return (
                <div id={'entry'+index} className="card border-0 bg-light mb-2"
                    key={day.uuid}>
                    <div className="card-body">
                        <button type="button" className="btn btn-outline-secondary btn-sm float-right"><i className="fas fa-times"></i></button>
                        <h5 className="card-title">Entry {index+1}</h5>

                        <div className="form-group row">
                            <label htmlFor={'date'+0} className="col-sm-2 col-form-label">Date <span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control form-control-lg"
                                    id={'date'+0} placeholder="DD MMM" value={day.date} required />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for={'type'+0} className="col-sm-2 col-form-label">Day Type <span class="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id={'type-addon'+0}><i className={daytype.icon}></i></span>
                                    </div>
                                    <select type="text" className="form-control" id={'type'+0} required value={daytype.value}
                                        aria-describedby={'type'+0}>
                                        {this.daytypeOptions()}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="tasks0" className="col-sm-2 col-form-label">Tasks <span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <textarea id="tasks0" className="form-control" rows="8"
                                    required value={day.tasks}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    }

    daytypeOptions() {
        return this.props.daytypes.map((daytype, index) => {
            return (<option value={daytype.value} key={daytype.uuid}>{daytype.label}</option>);
        });
    }

    render() {
        const week = this.state.selectedWeek.current;
        let daysCount = 0;
        if (week.days) {
            daysCount = week.days.length;
        }

        return (
            <section id="page-week-new">
                <form id="form-week-new">
                    <fieldset>
                        <div className="form-group row">
                            <label htmlFor="title" className="col-sm-2 col-form-label">Title <span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control form-control-lg"
                                    id="title" placeholder="Week ##" value={week.title}
                                    maxLength="50" required/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="company" className="col-sm-2 col-form-label">Company <span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="company-addon"><i className="fas fa-building"></i></span>
                                    </div>
                                    <input type="text" className="form-control" id="company"
                                        placeholder="Company" value={week.company}
                                        maxLength="50" required aria-describedby="company-addon"/>
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
                                    <input type="number" className="form-control" id="Year"
                                        placeholder="Year" value={week.year}
                                        min="0" step="1" required aria-describedby="year-addon"/>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <br/>

                    <fieldset>
                        <div class="row mb-2">
                            <div className="col-6 text-left text-secondary font-italic small">Total entries: {daysCount}</div>
                            <div className="col-6 text-right">
                                <button type="button" className="btn btn-outline-primary btn-sm"><i className="fas fa-plus"></i></button>
                            </div>
                        </div>
                        {this.daysFields(week)}
                        <div class="row mb-2">
                            <div className="col-6 text-left text-secondary font-italic small">Total entries: {daysCount}</div>
                            <div className="col-6 text-right">
                                <button type="button" className="btn btn-outline-primary btn-sm"><i className="fas fa-plus"></i></button>
                            </div>
                        </div>
                    </fieldset>


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
            </section>
        );
    }

} // end NewWeekPage

export default NewWeekPage;