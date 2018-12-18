import React, { Component } from 'react';

import data from './legend.data';

class LegendComponent extends Component {

    legendItems() {
        return data.map((element, index) => {
            return (
                <span className="badge badge-light text-dark mr-1" key={'lgi'+index}>
                    <i className={element.icon}></i> {element.label}</span>
            );
        });
    }
    
    render() {
        return (
            <p id="component-legend" className="border-bottom pb-1">
                {this.legendItems()}
            </p>
        );
    }

} // end LegendComponent

export default LegendComponent;