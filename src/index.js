import React from 'react';
import ReactDom from 'react-dom';

import App from './App.jsx';

import enums from './constants/enums';
import legend from './components/legend/legend';

ReactDom.render(
    <App
        pageStates={enums.page}
        formStates={enums.form}
        dayTypes={legend} />,
    document.getElementById('app')
);