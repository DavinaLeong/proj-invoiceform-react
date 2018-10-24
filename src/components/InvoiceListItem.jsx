import React, { Component } from 'react';
import { throws } from 'assert';

class InvoiceListItem extends Component {

    render() {
        return (
            <a href={this.props.href} className="list-group-item list-group-item-action" onClick={this.props.handleClickInvoiceItem}>{ this.props.invoiceNo }</a>
        );
    }

} // end InvoiceListItem

export default InvoiceListItem;