import uuid from 'uuid/v4';

import dayTypeData from './daytypes.data';

class DayTypesModel {

    constructor() {
        this.data = dayTypeData;
        this.columns = [
            'uuid', 'label', 'icon', 'value'
        ];
    }

    schema(label, icon, value) {
        return {
            uuid: uuid(),
            label: label || "",
            icon: icon || "",
            value: icon || ""
        };
    }

    findAll() {
        return this.data;
    }

    findByUuid(uuid) {
        if (typeof uuid !== 'string') {
            return null;
        }

        this.data.find((dayType) => {
            return dayType.uuid === uuid;
        });
    }

    findOne(value, key) {
        if (! this.columns.includes(key)) {
            // TODO: Proper error-handling
            console.error(`Column '${key} doesn't exist in DayTypes table.`);
            return null;
        }

        this.data.find((dayType) => {
            return dayType[key] === value;
        });
    }

} // end DayTypesModel class

export default DayTypesModel;