import React from 'react';
import ReactDom from 'react-dom';

import App from './App.jsx';

import enums from './lib/enums';
import data from './database/database.table';

ReactDom.render(
    <App
        pageStates={enums.page}
        formStates={enums.form}
        
        database={data} />,
    document.getElementById('app')
);