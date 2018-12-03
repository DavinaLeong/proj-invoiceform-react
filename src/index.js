import React from 'react';
import ReactDom from 'react-dom';

import App from './App.jsx';

import enums from './constants/enums';
import data from './database/database.table';

ReactDom.render(
    <App
        pageStates={enums.page}
        formStates={enums.form}
        
        data={data} />,
    document.getElementById('app')
);