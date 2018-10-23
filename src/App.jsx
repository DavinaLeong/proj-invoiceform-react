import React, { Component } from 'react';

import InvoiceListItem from './components/InvoiceListItem.jsx';
import enums from './enums';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formState: enums.formState.entry,
            selectedInvoice: null
        };

        this.fnClearSelectedInvoice = this.clearSelectedInvoiceHandler.bind(this);
    }

    componentInvoiceListItems(invoices) {
        return invoices.map((invoice, index) => {
            return (
                <InvoiceListItem key={ invoice.id } href="#" invoiceNo={invoice.invoiceNo} />
            );
        });
    }

    clearSelectedInvoiceHandler() {
        console.log('TRIGGERED: clearSelectedInvoiceHandler');
        this.setState({
            selectedInvoice: null
        });
    }

    render() {
        return (
            <div className="row">
                <div id="sidebar" className="col-3">
                    <div id="list-invoice" className="list-group mb-3">
                        <a href="#" className="list-group-item list-group-item-action active" onClick={this.fnClearSelectedInvoice}>New Invoice</a>
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