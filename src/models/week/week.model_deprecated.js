import uuid from 'uuid/v4';
import moment from 'moment';

import formats from '../../constants/formats';
import weekData from './week.data';
import DayTypeModel from '../daytype/daytype.model';

class WeekModel {
    
    constructor() {
        this.data = weekData;
        this.columns = [
            'uuid', 'title', 'company', 'year', 'days'
        ];
    }

    /**
     * Returns the column information of the Week table.
     */
    schema() {
        return {
            tableName: 'weeks',
            columns: {
                uuid: {
                    name: 'uuid',
                    type: 'string'
                },
                label: {
                    name: 'label',
                    type: 'string'
                },
                icon: {
                    name: 'icon',
                    type: 'string'
                },
                value: {
                    name: 'value',
                    type: 'string'
                },

                array: ['uuid', 'title',
                    'company', 'year', 'days']
            }
        };
    }

    /**
     * Retrieve all Weeks.
     */
    findAll() {
        return this.data;
    }

    /**
     * Retrieve all Weeks with DayTypes joined.
     */
    findAllWithDaytype() {
        const daytypeSchema = DayTypeModel.schema();

        return this.data.map((week, weekIndex) => {
            this.data[weekIndex].days.map((day, dayIndex) => {
                this.data[weekIndex].days[dayIndex].dayType =
                    DayTypeModel.findOne(day.type,
                        daytypeSchema.columns.type.name);
            });
        });
    }

    /**
     * Retrieve a Week by its uuid.
     * @param {string} uuid 
     */
    findByUuid(uuid) {
        if (typeof uuid !== 'string') {
            // TODO: Proper error-handling
            return null;
        }

        return this.data.find((dayType) => {
            return dayType.uuid === uuid;
        });
    }

    /**
     * Retrieve a Week by its other fields.
     * @param {string|number} value 
     * @param {string|number} key 
     */
    findOne(value, key) {
        if (! this.schema.columns.array.includes(key)) {
            // TODO: Proper error-handling
            console.error(`Column '${key} doesn't exist in DayTypes table.`);
            return null;
        }

        return this.data.find((dayType) => {
            return dayType[key] === value;
        });
    }

    /**
     * Create a new Week row.
     * @param {*} week 
     */
    create(week) {
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

        this.data.push(createdWeek);

        return this.data;
    }

    /**
     * Update an existing Week row by its uuid.
     * @param {string} uuid 
     * @param {*} week 
     */
    update(uuid, week) {
        if (! uuid || typeof uuid === 'undefined' ||
            ! week || typeof week === 'undefined') {
            // TODO: Proper error-handling
            return null;
        }

        let updatedWeek = null;
        
        this.data.find((week, index) => {
            if (week.uuid === uuid) {
                this.data[index].title = week.title;
                this.data[index].company = week.company;
                this.data[index].year = week.year;
                this.data[index].days = week.days;
                this.data[index].createdAt = week.createdAt;
                this.data[index].updatedAt = moment().format(formats.dbDate);

                updatedWeek = this.data[index];
            }
        });

        return this.data;
    }

    /**
     * Update the day of an existing Week row by the day's uuid.
     * @param {string} uuid 
     * @param {string} dayUuid 
     * @param {*} day 
     */
    updateDay(uuid, dayUuid, day) {
        if (! uuid || typeof uuid === 'undefined' ||
            ! dayUuid || typeof dayUuid === 'undefined' ||
            ! week || typeof week === 'undefined') {
            // TODO: Proper error-handling
            return null;
        }

        const retrievedWeek = this.data.find((week, index) => {
            if (week.uuid === uuid) {
                retrievedWeek.index = index;
            }
        });

        if (this.data[retrievedWeek].days.length <= 0) {
            return null;
        }

        this.data[retrievedWeek].days.find((day, index) => {
            if (day.uuid === dayUuid) {
                this.data[retrievedWeek].days[index].date = day.date;
                this.data[retrievedWeek].days[index].type = day.type;
                this.data[retrievedWeek].days[index].tasks = day.tasks;
            }
        });
        this.data[retrievedWeek].createdAt = retrievedWeek.createdAt;
        this.data[retrievedWeek].updatedAt = moment().format(formats.dbDate);

        return this.data;
    }

    /**
     * Delete a Week by its uuid.
     * @param {string} uuid 
     */
    delete(uuid) {
        if (! uuid || typeof uuid === 'undefined') {
            // TODO: Proper error-handling
            return null;
        }

        this.data.find((week, index) => {
            if (week.uuid === uuid) {
                this.data[index] = null;
            }
        });

        return this.data;
    }

    /**
     * Delete a Day of a Week by its uuid.
     * @param {string} uuid 
     * @param {string} dayUuid 
     */
    deleteDay(uuid, dayUuid) {
        if (! uuid || typeof uuid === 'undefined' ||
            ! dayUuid || typeof dayUuid === 'undefined') {
            // TODO: Proper error-handling
            return null;
        }

        let weekIndex = this.data.find((week, index) => {
            if (week.uuid === uuid) {
                return index;
            }
        });

        if (this.data[weekIndex].days.length <= 0) {
            return null;
        }

        this.data[weekIndex].days.find((day, index) => {
            if (day.uuid === dayUuid) {
                this.data[weekIndex].days[index] = null;
            }
        });

        return this.data;
    }

} // end WeekModel class

export default WeekModel;