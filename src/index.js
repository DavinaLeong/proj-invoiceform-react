import React from 'react';
import ReactDom from 'react-dom';
import App from './App.jsx';

import invoices from './sample-invoices';
import defaultInvoice from './default-invoice';

ReactDom.render(<App invoices={invoices} defaultInvoice={defaultInvoice} />, document.getElementById('app'));