import uuid from 'uuid/v4';

import dayTypeData from './daytype.data';

class DayTypeModel {

    constructor() {
        this.data = dayTypeData;
        this.columns = [
            'uuid', 'label', 'icon', 'value'
        ];
    }

    findAll() {
        return this.data;
    }

    findByUuid(uuid) {
        if (! uuid || typeof uuid !== 'string') {
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

        return this.data.find((element) => {
            return element[key] === value;
        });
    }

} // end DayTypeModel class

export default DayTypeModel;