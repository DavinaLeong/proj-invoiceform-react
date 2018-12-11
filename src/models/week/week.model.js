import uuid from 'uuid/v4';
import moment from 'moment';

import formats from '../../constants/formats';
import weekData from './week.data';
import DaytypeModel from '../daytype/daytype.model';

const WeekModel = {};
const data = weekData;

/**
 * Returns the column information of the Week table.
 */
WeekModel.schema = {
    tableName: 'weeks',
    columns: {
        uuid: { name: 'uuid', type: 'string' },
        title: { name: 'label', type: 'string' },
        company: { name: 'icon', type: 'string' },
        year: { name: 'year', type: 'string' },
        days: { name: 'days', type: 'array' },
        createdAt: { name: 'value', type: 'datetime' },
        updatedAt: { name: 'value', type: 'datetime' },

        array: ['uuid', 'title', 'company', 'year', 'days',
            'createdAt', 'updatedAt']
    }
};

/**
 * Retrieve all Weeks.
 */
WeekModel.findAll = function() {
    return data;
}

/**
 * Retrieve all Weeks with DayTypes joined.
 */
WeekModel.findAllWithDaytypes = function() {
    const daytypeSchema = DaytypeModel.schema;

    data.map((week, weekIndex) => {

        if (! week.days || typeof week.days === 'undefined' ||
            week.days.length > 1) {
            
            week.days.map((day, dayIndex) => {
                week.days[dayIndex].daytype =
                    DaytypeModel.findOne(day.type,
                        daytypeSchema.columns.value.name);
            });
        }
        data[weekIndex] = week;

    });

    return data;
}

/**
 * Create a new Week row.
 * @param {*} week 
 */
WeekModel.create = function(week) {
    if (! week || typeof week === 'undefined') {
        // TODO: Proper error-handling
        return null;
    }

    const createdWeek = {
        uuid: uuid(),
        title: week.title,
        company: week.company,
        year: week.year,
        days: week.days,
        createdAt: moment().format(formats.dbDate),
        updatedAt: moment().format(formats.dbDate)
    };

    data.push(createdWeek);

    return data;
}

/**
 * Update an existing Week row by its uuid.
 * @param {string} uuid 
 * @param {*} week 
 */
WeekModel.update = function(uuid, week) {
    if (! uuid || typeof uuid === 'undefined' ||
        ! week || typeof week === 'undefined') {
        // TODO: Proper error-handling
        return null;
    }

    data.find((dbWeek, index) => {
        if (dbWeek.uuid === uuid) {
            dbWeek.title = week.title;
            dbWeek.company = week.company;
            dbWeek.year = week.year;
            dbWeek.days = week.days;
            dbWeek.createdAt = week.createdAt;
            dbWeek.updatedAt = moment().format(formats.dbDate);

            data[index] = dbWeek;
        }
    });
    return data;
} 


export default WeekModel;