import uuid from 'uuid/v4';

import dayTypeData from './daytype.data';

/**
 * The model that interfaces with the DayType table data.
 */
class DayTypeModel {

    constructor() {
        this.data = dayTypeData;
    }

    /**
     * Returns the column information of the DayType table.
     */
    schema() {
        return {
            tableName: 'daytype',
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
                
                array: ['uuid', 'label',
                    'icon', 'value']
            }
        };
    }

    /**
     * Retrieve all DayTypes
     */
    findAll() {
        return this.data;
    }

    /**
     * Retrieve a DayType by its uuid.
     * @param {string} uuid 
     */
    findByUuid(uuid) {
        if (! uuid || typeof uuid !== 'string') {
            // TODO: Proper error-handling
            return null;
        }

        return this.data.find((dayType) => {
            return dayType.uuid === uuid;
        });
    }

    /**
     * Retrieve a DayType by its other fields.
     * @param {string|number} value 
     * @param {string|number} key 
     */
    findOne(value, key) {
        if (! this.schema.columns.array.includes(key)) {
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