import React from 'react';
import ReactDom from 'react-dom';

import App from './App.jsx';

import enums from './lib/enums';
import data from './database/database.table';
import WeekModel from './models/week/week.model';

ReactDom.render(
    <App
        pageStates={enums.page}
        formStates={enums.form}
        
        newWeekSchema={WeekModel.newWeekSchema()}
        weeks={WeekModel.findAllWithDaytypes()} />,
    document.getElementById('app')
);