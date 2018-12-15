import React, { Component } from 'react';

class NewWeekPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedWeek: this.props.selectedWeek
        };
    }

    render() {
        this.formValues = this.state.selectedWeek.current;

        return (
            <form id="form-existing-week">
                <div className="form-group row">
                    <label for="title" className="col-sm-2 col-form-label">Title <span className="text-danger">*</span></label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control form-control-lg"
                            id="title" placeholder="Week ##" value={this.formValues.title}
                            maxLength="50" required />
                    </div>
                </div>

                <div className="form-group row">
                    <label for="company" className="col-sm-2 col-form-label">Company <span className="text-danger">*</span></label>
                    <div className="col-sm-8">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="fas fa-building"></i></span>
                            </div>
                            <input type="text" className="form-control" id="company"
                                placeholder="Company" value={this.formValues.company}
                                maxLength="50" required />
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <label for="Year" className="col-sm-2 col-form-label">Year <span className="text-danger">*</span></label>
                    <div className="col-sm-8">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i className="fas fa-calendar"></i></span>
                            </div>
                            <input type="number" className="form-control" id="Year"
                                placeholder="Year" value={this.formValues.year}
                                min="0" step="1" required />
                        </div>
                    </div>
                </div>
                <br/>
                
                <div id="entry0" className="card border-0 bg-secondary-light mb-2">
                    <div className="card-body">
                        <h5 className="card-title">Entry</h5>

                        <div className="form-group row">
                            <label for="date0" className="col-sm-2 col-form-label">Date <span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control form-control-lg"
                                    id="date0" placeholder="DD MMM" required />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="type0" className="col-sm-2 col-form-label">Day Type <span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-question"></i></span>
                                    </div>
                                    <select type="text" className="form-control" id="type0" required>
                                        <option>Undefined</option>
                                        <option>Work Day</option>
                                        <option>Public Holiday</option>
                                        <option>Company Events</option>
                                        <option>Annual Leave</option>
                                        <option>Medical Leave</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="tasks0" className="col-sm-2 col-form-label">Tasks <span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <textarea id="tasks0" className="form-control" rows="8" required ></textarea>
                            </div>
                        </div>
                    </div>{/* ./card-body */}
                </div>{/* ./entry0 */}

                <div id="entry1" className="card border-0 bg-secondary-light mb-2">
                    <div className="card-body">
                        <button type="button" className="btn btn-outline-secondary btn-sm float-right"><i className="fas fa-times"></i></button>
                        <h5 className="card-title">Entry</h5>

                        <div className="form-group row">
                            <label for="date1" className="col-sm-2 col-form-label">Date <span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <input type="text" className="form-control form-control-lg" id="date1" placeholder="DD MMM" required />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="type1" className="col-sm-2 col-form-label">Day Type <span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><i className="fas fa-question"></i></span>
                                    </div>
                                    <select type="text" className="form-control" id="type1" required>
                                        <option selected>Undefined</option>
                                        <option>Work Day</option>
                                        <option>Public Holiday</option>
                                        <option>Company Events</option>
                                        <option>Annual Leave</option>
                                        <option>Medical Leave</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="tasks1" className="col-sm-2 col-form-label">Tasks <span className="text-danger">*</span></label>
                            <div className="col-sm-8">
                                <textarea id="tasks1" className="form-control" rows="8" required ></textarea>
                            </div>
                        </div>
                    </div>{/* ./card-body */}
                </div>{/* ./entry0 */}

                <div className="form-group row">
                    <div className="col-sm-12 text-right">
                        <button type="button" className="btn btn-outline-primary btn-sm"><i className="fas fa-plus"></i></button>
                    </div>
                </div>


                <div className="form-group row">
                    <div className="col-sm-12 text-right">
                        <a href="./tasks.html" className="btn btn-outline-secondary mr-1"><i className="fas fa-ban"></i> Cancel</a>
                        <button type="button" className="btn btn-primary"><i className="fas fa-check"></i> Submit</button>
                    </div>
                </div>
            </form>
        );
    }

} // end NewWeekPage

export default NewWeekPage;