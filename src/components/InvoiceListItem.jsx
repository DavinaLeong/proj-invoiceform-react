import React, { Component } from 'react';
import { throws } from 'assert';

class InvoiceListItem extends Component {

    render() {
        const listItemClass = this.props.isActiveItem ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action';
        
        return (
            <a href={this.props.href} className={listItemClass} onClick={this.props.handleClickInvoiceItem}>{ this.props.invoiceNo }</a>
        );
    }

} // end InvoiceListItem

export default InvoiceListItem;