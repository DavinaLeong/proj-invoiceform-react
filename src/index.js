import React from 'react';
import ReactDom from 'react-dom';

import App from './App.jsx';

import enums from './constants/enums';

ReactDom.render(
    <App
        pageStates={enums.page}
        formStates={enums.form} />,
    document.getElementById('app')
);