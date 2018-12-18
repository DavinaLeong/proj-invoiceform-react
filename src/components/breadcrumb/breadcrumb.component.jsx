import React, { Component } from 'react';

import data from './breadcrumb.data';

/**
 * This component is responsible for rendering
 * the breadcrumbs of each page based on the
 * App's current pageState.
 */
class BreadcrumbComponent extends Component {

    breadcrumbItems() {
        return data[this.props.currentPage].map((element, index) => {
            if (element.active === true) {
                return (
                    <li className="breadcrumb-item active" aria-current="page" key={ 'bci' + index }>{ element.label }</li>
                );
            }

            return (
                <li className="breadcrumb-item" key={ 'bci' + index }>
                    <a href={ element.href } onClick={() => this.props.changePage(element.nextPage)}>{ element.label }</a>
                </li>
            );
        });
    }
    
    render() {
        return (
            <nav className="mt-1" aria-label="breadcrumb">
                <ol className="breadcrumb">
                    { this.breadcrumbItems() }
                </ol>
            </nav>
        );
    }

} // end BreadcrumbComponent

export default BreadcrumbComponent;