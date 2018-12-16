import React from 'react';
import ReactDom from 'react-dom';

import App from './App.jsx';

import enums from './lib/enums';
import data from './database/database.table';
import WeekModel from './models/week/week.model';
import DaytypeModel from './models/daytype/daytype.model.js';

ReactDom.render(
    <App
        pageStates={enums.page}
        formStates={enums.form}
        
        newWeekSchema={WeekModel.newWeekSchema()}
        weeks={WeekModel.findAllWithDaytypes()}
        daytypes={DaytypeModel.findAll()} />,
    document.getElementById('app')
);