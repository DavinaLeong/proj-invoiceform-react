import React, { Component } from 'react';

import InvoiceListItem from './components/InvoiceListItem.jsx';
import enums from './enums';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formState: enums.formState.entry,
            invoices: this.props.invoices,
            selectedInvoice: null
        };
    }

    componentInvoiceListItems(invoices) {
        return invoices.map((invoice) => {
            return (
                <InvoiceListItem
                    key={ invoice.id }
                    href="#"
                    invoiceNo={invoice.invoiceNo}
                    isActiveItem={(this.state.selectedInvoice && this.state.selectedInvoice.id) === invoice.id}
                    handleClickInvoiceItem={this.handleClickInvoiceItem.bind(this, invoice.id)} />
            );
        });
    }

    handleClickInvoiceItem(id) {
        if (id) {
            this.setState({
                selectedInvoice: this.state.invoices.find(invoice => invoice.id === id)
            });
        } else {
            this.setState({
                selectedInvoice: null
            });
        }
    }

    render() {
        const newInvoiceItemClass = this.state.selectedInvoice ? 'list-group-item list-group-item-action' : 'list-group-item list-group-item-action active';

        return (
            <div className="row">
                <div id="sidebar" className="col-3">
                    <div id="list-invoice" className="list-group mb-3">
                        <a href="#" className={newInvoiceItemClass} onClick={this.handleClickInvoiceItem.bind(this, null)}>New Invoice</a>
                        { this.componentInvoiceListItems(this.props.invoices) }
                    </div>
                    <h6>Form state: <span className="badge badge-info">{ this.state.formState.toUpperCase() }</span></h6>
                </div>

                <div id="invoice" className="col-9">
                    <h2 className="mb-3">Invoice</h2>
                    <div><em>form here</em></div>
                </div>
            </div>
        );
    }

}; // end App

export default App;