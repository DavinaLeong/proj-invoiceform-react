import uuid from 'uuid/v4';
import moment from 'moment';

import formats from '../../lib/formats';
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
 * Returns the schema of a new week object.
 */
WeekModel.newWeekSchema = function() {
    const weeks = WeekModel.findAll();
    const lastWeekRecord = weeks[0];
    const lastWeekNumber = /^[Ww]eek (\d+)$/.exec(lastWeekRecord.title)[1];

    return {
        uuid: uuid(),
        title: "Week " + (Number(lastWeekNumber) + 1),
        company: "The Pixel Age",
        year: moment().format(formats.year),
        createdAt: "",
        updatedAt: "",
        days: [
            {
                uuid: uuid(),
                date: "",
                type: "",
                tasks: ""
            }, {
                uuid: uuid(),
                date: "",
                type: "",
                tasks: ""
            }, {
                uuid: uuid(),
                date: "",
                type: "",
                tasks: ""
            }, {
                uuid: uuid(),
                date: "",
                type: "",
                tasks: " PROJ01-01: Finished"
            }, {
                uuid: uuid(),
                date: "",
                type: "",
                tasks: ""
            }
        ]
    }
}

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
 * Retrieve a Week by its other fields.
 * @param {string|number} value 
 * @param {string|number} key 
 */
WeekModel.findOne = function(value, key) {
    if (! value || typeof value === 'undefined' ||
        ! key || typeof key === 'undefined') {
        console.error('WeekModel.findOne(): Parameters undefined.');
        // TODO: Proper error-handling
        return null;
    }

    const schema = WeekModel.schema;
    if (! schema.columns.array.includes(key)) {
        // TODO: Proper error-handling
        console.error(`Column '${key} doesn't exist in ${schema.tableName} table.`);
        return null;
    }
    
    console.log(value, key);
    return data.find(week => week[key] === value);
}

/**
 * Retrieve a Week by its uuid.
 * @param {string} uuid
 */
WeekModel.findByUuid = function(uuid) {
    if (! uuid || typeof uuid === 'undefined') {
        console.error('WeekModel.findByUuid(): Parameters undefined.');
        // TODO: Proper error-handling
        return null;
    }

    return WeekModel.findOne(uuid, 'uuid');
}

/**
 * Retrieve a Week by its other fields with its day-types.
 * @param {string|number} value 
 * @param {string|number} key 
 */
WeekModel.findOneWithDaytypes = function(value, key) {
    if (! value || typeof value === 'undefined' ||
        ! key || typeof key === 'undefined') {
        console.error('WeekModel.findOneWithDaytypes(): Parameters undefined.');
        // TODO: Proper error-handling
        return null;
    }

    const schema = WeekModel.schema;
    if (! schema.columns.array.includes(key)) {
        // TODO: Proper error-handling
        console.error(`Column '${key} doesn't exist in ${schema.tableName} table.`);
        return null;
    }

    const daytypeSchema = DaytypeModel.schema;
    const week = WeekModel.findOne(value, key);

    if (week && week.days && week.days.length > 0) {
        week.days.map((day, index) => {
            week.days[index].daytype = DaytypeModel.findOne(day.type,
                daytypeSchema.columns.value.name);
        });
    }

    return week;
}

/**
 * Retrieve a Week by its uuid with its day-types.
 * @param {string} uuid
 */
WeekModel.findByUuidWithDaytypes = function(uuid) {
    if (! uuid || typeof uuid === 'undefined') {
        console.error('WeekModel.findByUuid(): Parameters undefined.');
        // TODO: Proper error-handling
        return null;
    }

    return WeekModel.findOneWithDaytypes(uuid, 'uuid');
}

/**
 * Create a new Week row.
 * @param {*} week 
 */
WeekModel.create = function(week) {
    if (! week || typeof week === 'undefined') {
        // TODO: Proper error-handling
        console.error('WeekModel.create(): Arguments undefined.');
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
        console.error('WeekModel.update(): Arguments undefined.');
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

/**
 * Update the day of an existing Week row by the day's uuid.
 * @param {string} uuid 
 * @param {string} dayUuid 
 * @param {*} day 
 */
WeekModel.updateDay = function(uuid, dayUuid, day) {
    if (! uuid || typeof uuid === 'undefined' ||
        ! dayUuid || typeof dayUuid === 'undefined' ||
        ! day || typeof day === 'undefined') {
        // TODO: Proper error-handling
        console.error('WeekModel.updateDay(): Arguments undefined.');
        return null;
    }

    const week = data.find((dbWeek, index) => {
        if (dbWeek.uuid === uuid) {
            dbWeek.index = index;
            return dbWeek;
        }
    });

    if (! week || typeof week === 'undefined' ||
        week.days.length > 0) {
        week.days.find((dbDay, dayIndex) => {
            if (dbDay.uuid === dayUuid) {
                dbDay.date = day.date;
                dbDay.type = day.type;
                dbDay.tasks = day.tasks;

                week.days[dayIndex] = dbDay;
            }
        });

        data[week.index] = week;
    }

    return data;
}

WeekModel.delete = function(uuid) {
    if (! uuid || typeof uuid === 'undefined') {
        console.error('WeekModel.delete(): Arguments undefined.');
        return null;
    }

    let weekIndex = 0;
    data.find((week, index) => {
        if (week.uuid === uuid) {
            weekIndex = index;
        }
    });

    if (weekIndex > 0) data.splice(weekIndex, 1);

    return data;
}

WeekModel.deleteDay = function(uuid, dayUuid) {
    if (! uuid || typeof uuid === 'undefined' ||
        ! dayUuid || typeof dayUuid === 'undefined') {
        console.error('WeekModel.deleteDay(): Arguments undefined.');
        return null;
    }

    let dayIndex = 0;
    data.find((week, index) => {
        if (week.uuid === uuid) {
            
            week.days.find((day, dIndex) => {
                if (day.uuid === dayUuid) {
                    dayIndex = dIndex;
                }
            });
            week.days.splice(dayIndex, 1);
            data[index] = week;

        }
    });

    return data;
}

export default WeekModel;