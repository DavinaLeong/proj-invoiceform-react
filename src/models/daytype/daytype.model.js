import uuid from 'uuid/v4';

import dayTypeData from './daytype.data';

const DayTypeModel = {};

DayTypeModel.data = dayTypeData;
DayTypeModel.schema = {
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

/**
 * Retrieve all DayTypes
 */
DayTypeModel.findAll = function() {
    return DayTypeModel.data;
}

/**
 * Retrieve a DayType by its uuid.
 * @param {string} uuid 
 */
DayTypeModel.findByUuid = function(uuid) {
    if (! uuid || typeof uuid !== 'string') {
        // TODO: Proper error-handling
        return null;
    }

    return DayTypeModel.data.find((dayType) => {
        return dayType.uuid === uuid;
    });
}

/**
 * Retrieve a DayType by its other fields.
 * @param {string|number} value 
 * @param {string|number} key 
 */
DayTypeModel.findOne = function(value, key) {
    if (! DayTypeModel.schema.columns.array.includes(key)) {
        // TODO: Proper error-handling
        console.error(`Column '${key} doesn't exist in DayTypes table.`);
        return null;
    }

    return DayTypeModel.data.find((element) => {
        return element[key] === value;
    });
}

export default DayTypeModel;