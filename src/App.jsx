import React, { Component } from 'react';

import InvoiceListItem from './components/InvoiceListItem.jsx';
import enums from './enums';
import omittedFields from './omitted-fields';
import formats from './formats';

/**
 * The parent component which holds and monitors all necessary
 * props and states that the children components need.
 */
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formState: enums.formState.entry,
            invoices: this.props.invoices,
            selectedInvoice: this.props.defaultInvoice
        };

        this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
    }

    /**
     * Takes in aa array of Invoices and returns them as an array of
     * InvoiceListItem components.
     * @param {Object[]} invoices - List of invoices on the sidebar
     */
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

    /**
     * Updates the selectedInvoice in the state
     * with the currently clicked invoice item.
     * @param {number} id - The id of the sidebar invoice item clicked
     */
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

    /**
     * Updates the values of the selectedInvoice.
     * @param {string} field - The name of the field to update
     * @param {*} value - The value of the field to be updated
     */
    updateSelectedInvoice(field, value) {
        const selectedInvoice = this.state.selectedInvoice;
        selectedInvoice[field] = value;
        this.setState({ selectedInvoice: selectedInvoice});
    }

    /**
     * Generic onChange handler.
     * @param {*} event 
     */
    handleFormFieldChange(event) {
        console.log('form field: ', event.target.name);
        if (! omittedFields.includes(event.target.name)) {
            this.updateSelectedInvoice(event.target.name, event.target.value);
        }
    }

    render() {
        const newInvoiceItemClass = (this.state.selectedInvoice.id === null) ?
            'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action';
        const selectedInvoice = this.state.selectedInvoice;

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
                                <td><input id="company" name="company" type="text" className="form-control" required
                                    value={selectedInvoice.company} onChange={this.handleFormFieldChange} /></td>

                                <td><label htmlFor="invoiceNo">Invoice No.</label></td>
                                <td><input id="invoiceNo" name="invoiceNo" type="text" className="form-control" required
                                    value={selectedInvoice.invoiceNo} onChange={this.handleFormFieldChange} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="address">Address</label></td>
                                <td><textarea id="address" name="address" className="form-control" rows="2"
                                    required value={selectedInvoice.address}
                                    onChange={this.handleFormFieldChange}></textarea></td>

                                <td><label htmlFor="date">Date</label></td>
                                <td><input id="date" name="date" type="text" className="form-control"
                                    placeholder="DD/MM/YYYY" required
                                    value={selectedInvoice.date}
                                    onChange={this.handleFormFieldChange} /></td>{/* ./form-invoice-table-company */}
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
                                    <textarea id="soldTo" name="soldTo" className="form-control" rows="3"
                                        required value={selectedInvoice.soldTo}
                                        onChange={this.handleFormFieldChange}></textarea>
                                </td>
                                <td>
                                    <textarea id="shipTo" name="shipTo" className="form-control" rows="3"
                                        required value={selectedInvoice.shipTo}
                                        onChange={this.handleFormFieldChange}></textarea>
                                </td>
                            </tr>
                            </tbody>
                        </table>{/* ./form-invoice-table-maindetails */}
                        <hr/>

                        <table id="form-invoice-table-otherdetails" className="table table-borderless">
                            <tbody>
                            <tr>
                                <td><label htmlFor="salesPerson">Sales Person</label></td>
                                <td><input id="salesPerson" name="salesPerson" type="text" className="form-control"
                                    required value={selectedInvoice.salesPerson}
                                    onChange={this.handleFormFieldChange} /></td>

                                <td><label htmlFor="poNo">P.O. No.</label></td>
                                <td><input id="poNo" name="poNo" type="text" className="form-control"
                                    required value={selectedInvoice.poNo}
                                    onChange={this.handleFormFieldChange} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="shippedDate">Shipped Date</label></td>
                                <td><input id="shippedDate" name="shippedDate" type="text"
                                    placeholder="DD/MM/YYYY" className="form-control"
                                    required value={selectedInvoice.shippedDate}
                                    onChange={this.handleFormFieldChange} /></td>

                                <td><label htmlFor="shipment">Shipment</label></td>
                                <td><input id="shipment" name="shipment" type="text" className="form-control"
                                    required value={selectedInvoice.shipment}
                                    onChange={this.handleFormFieldChange} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="terms">Terms</label></td>
                                <td><input id="terms" name="terms" type="text" className="form-control"
                                    required value={selectedInvoice.terms}
                                    onChange={this.handleFormFieldChange} /></td>

                                <td><label htmlFor="reference">Reference</label></td>
                                <td><input id="reference" name="reference" type="text" className="form-control"
                                    required value={selectedInvoice.reference}
                                    onChange={this.handleFormFieldChange} /></td>{/* ./form-invoice-table-company */}
                            </tr>
                            </tbody>
                        </table>{/* ./form-invoice-table-otherdetails */}
                        <hr/>

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
                                    <textarea id="remarks" name="remarks" rows="4" className="form-control"
                                        value={selectedInvoice.remarks} onChange={this.handleFormFieldChange}></textarea>
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