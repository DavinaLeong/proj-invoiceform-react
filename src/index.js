import React from 'react';
import ReactDom from 'react-dom';
import App from './App.jsx';

import invoices from './sample-invoices';

ReactDom.render(<App invoices={invoices} />, document.getElementById('app'));