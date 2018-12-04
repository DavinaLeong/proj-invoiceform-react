import React, { Component } from 'react';

import data from './legend';

class LegendComponent extends Component {

    legendItems() {
        return data.map((element, index) => {
            return (
                <span className="badge badge-light text-secondary mr-1" key={'lgi'+index}>
                    <i className={element.icon}></i> {element.label}</span>
            );
        });
    }
    
    render() {
        return (
            <p className="border-bottom pb-1">
                <span className="badge badge-light text-dark mr-1">
                    <i className="fas fa-laptop fa-fw"></i> Work Day</span>
                <span className="badge badge-light text-dark mr-1">
                    <i className="fas fa-calendar fa-fw"></i> Public Holiday</span>
                <span className="badge badge-light text-dark mr-1">
                    <i className="fas fa-building fa-fw"></i> Company Events</span>
                <span className="badge badge-light text-dark mr-1">
                    <i className="fas fa-sun fa-fw"></i> Annual Leave</span>
                <span className="badge badge-light text-dark mr-1">
                    <i className="fas fa-stethoscope fa-fw"></i> Medical Leave</span>
                <span className="badge badge-light text-dark">
                    <i className="fas fa-question fa-fw"></i> Undefined</span>
            </p>
        );
    }

} // end LegendComponent

export default LegendComponent;