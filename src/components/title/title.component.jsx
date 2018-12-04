import React, { Component } from 'react';

import data from './title';

class TitleComponent extends Component {
    
    render() {
        const page = data[this.props.page];

        return (
            <h2 className="mb-3">
                    <i className={page.icon}></i> {page.label}</h2>
        );
    }

} // end Title

export default TitleComponent;