import React, { Component } from 'react';

import InvoiceListItem from './components/InvoiceListItem.jsx';
import enums from './enums';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formState: enums.formState.entry,
            invoices: this.props.invoices,
            selectedInvoice: this.props.defaultInvoice
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
                selectedInvoice: this.props.defaultInvoice
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
                    
                    <form id="form-invoice">
                        <table id="form-invoice-table-company" className="table table-borderless">
                            <tbody>
                            <tr>
                                <td><label htmlFor="company">Company</label></td>
                                <td><input id="company" name="company" type="text" className="form-control" required /></td>

                                <td><label htmlFor="invoiceNo">Invoice No.</label></td>
                                <td><input id="invoiceNo" name="invoiceNo" type="text" className="form-control" required /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="address">Address</label></td>
                                <td><textarea id="address" name="address" className="form-control" rows="2" required></textarea></td>

                                <td><label htmlFor="date">Date</label></td>
                                <td><input id="date" name="date" type="date" className="form-control" placeholder="DD-MM-YYYY" required /></td>{/* ./form-invoice-table-company */}
                            </tr>
                            </tbody>
                        </table>

                        <table id="form-invoice-table-maindetails" className="table table-borderless">
                            <thead className="bg-secondary-light text-secondary">
                            <tr>
                                <th><label htmlFor="soldTo">Sold To</label></th>
                                <th><label htmlFor="shipTo">Ship To</label></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <textarea id="soldTo" name="soldTo" className="form-control"
                                        rows="3" required></textarea>
                                </td>
                                <td>
                                    <textarea id="shipTo" name="shipTo" className="form-control"
                                        rows="3" required></textarea>
                                </td>
                            </tr>
                            </tbody>
                        </table>{/* ./form-invoice-table-maindetails */}

                        <table id="form-invoice-table-otherdetails" className="table table-borderless">
                            <thead className="bg-secondary-light text-secondary">
                            <tr>
                                <th><label htmlFor="salesPerson">Sales Person</label></th>
                                <th><label htmlFor="poNo">P.O. No.</label></th>
                                <th><label htmlFor="shippedDate">Shipped Date</label></th>
                                <th><label htmlFor="shipment">Shipment</label></th>
                                <th><label htmlFor="terms">Terms</label></th>
                                <th><label htmlFor="reference">Reference</label></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><input id="salesPerson" name="salesPerson" className="form-control" required /></td>
                                <td><input id="poNo" name="poNo" className="form-control" required /></td>
                                <td><input id="shippedDate" name="shippedDate" className="form-control" required /></td>
                                <td><input id="shipment" name="shipment" className="form-control" required /></td>
                                <td><input id="terms" name="terms" className="form-control" required /></td>
                                <td><input id="reference" name="reference" className="form-control" required /></td>
                            </tr>
                            </tbody>
                        </table>{/* ./form-invoice-table-otherdetails */}

                        <table id="form-invoice-table-lineitems" className="table table-striped">
                        <thead className="bg-secondary-light text-secondary">
                        <tr>
                            <th>Item</th>
                            <th>Qty</th>
                            <th>Unit Price</th>
                            <th>Amount</th>
                            <th>&nbsp;</th>
                        </tr>
                        </thead>
                            <tbody>
                            </tbody>
                        </table>{/* ./form-invoice-table-lineitems */}

                        <table id="form-invoice-table-total" className="table table-borderless">
                            <tbody>
                            <tr>
                                <td rowSpan="5">
                                    <label htmlFor="remarks">Remarks</label>
                                    <textarea id="remarks" name="remarks" rows="4" className="form-control"></textarea>
                                </td>
                            </tr>    
                            <tr>
                                <td className="bg-secondary-light text-secondary">Subtotal</td>
                                <td>{ this.state.selectedInvoice.subtotal }</td>
                            </tr>
                            <tr>
                                <td className="bg-secondary-light text-secondary">Processing Fees</td>
                                <td>{ this.state.selectedInvoice.processingFees }</td>
                            </tr>
                            <tr>
                                <td className="bg-secondary-light text-secondary">Taxes</td>
                                <td>{ this.state.selectedInvoice.taxes }</td>
                            </tr>
                            <tr>
                                <td className="bg-secondary-light text-secondary">Total</td>
                                <td>{ this.state.selectedInvoice.total }</td>
                            </tr>
                            </tbody>
                        </table>{/* ./form-invoice-table-total */}

                        <div className="text-right">
                            <button id="form-btn-submit" className="btn btn-primary" type="button">Submit <i className="fas fa-check fa-fw"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}; // end App

export default App;