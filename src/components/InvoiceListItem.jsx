import React, { Component } from 'react';

class InvoiceListItem extends Component {

    render() {
        return (
            <a href={this.props.href} className="list-group-item list-group-item-action">{ this.props.invoiceNo }</a>
        );
    }

} // end InvoiceListItem

export default InvoiceListItem;