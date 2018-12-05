import uuid from 'uuid/v4';

import weekData from './week.data';

class WeekModel {
    
    constructor() {
        this.data = weekData;
        this.columns = [
            'uuid', 'title', 'company', 'year', 'days'
        ];
    }

    week(title, company, year, days) {
        return {
            title: title,
            company: company,
            year: year,
            days: days
        };
    }

    findAll() {
        return this.data;
    }

    findByUuid(uuid) {
        if (typeof uuid !== 'string') {
            // TODO: Proper error-handling
            return null;
        }

        return this.data.find((dayType) => {
            return dayType.uuid === uuid;
        });
    }

    findOne(value, key) {
        if (! this.columns.includes(key)) {
            // TODO: Proper error-handling
            console.error(`Column '${key} doesn't exist in DayTypes table.`);
            return null;
        }

        return this.data.find((dayType) => {
            return dayType[key] === value;
        });
    }

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
            days: week.days
        };

        this.data.push(createdWeek);

        return createdWeek;
    }

    update(uuid, week) {
        if (! uuid || typeof uuid === 'undefined' ||
            ! week || typeof week === 'undefined') {
            // TODO: Proper error-handling
            return null;
        }

        let updatedWeek = null;
        
        this.data.find((element, index) => {
            if (element.uuid === uuid) {
                this.data[index].title = week.title;
                this.data[index].company = week.company;
                this.data[index].year = week.year;
                this.data[index].days = week.days;

                updatedWeek = this.data[index];
            }
        });

        return updatedWeek;
    }

    delete(uuid) {
        if (! uuid || typeof uuid === 'undefined') {
            // TODO: Proper error-handling
            return null;
        }

        this.data.find((element, index) => {
            if (element.uuid === uuid) {
                this.data[index] = null;
            }
        });
    }

} // end WeekModel class

export default WeekModel;