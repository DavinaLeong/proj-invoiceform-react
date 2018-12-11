import moment from 'moment';
import formats from './../../lib/formats';

const createdAt = moment().clone().subtract(20, "days").format(formats.dbDate);
const updatedAt = moment().clone().subtract(10, "days").format(formats.dbDate);

export default [
    {
        uuid: "478be8ba-d3a0-4818-bc6a-f4a818d57c45",
        label: "Work Day",
        icon: "fas fa-laptop mr-1",
        value: "WORK_DAY",
        createdAt: createdAt,
        updatedAt: updatedAt
    }, {
        uuid: "9166c064-aceb-40c4-b173-410ffe7832e3",
        label: "Public Holiday",
        icon: "fas fa-calendar mr-1",
        value: "PUBLIC_HOLIDAY",
        createdAt: createdAt,
        updatedAt: updatedAt
    }, {
        uuid: "d32f77b4-9c2b-49bb-b375-8619be49a0a8",
        label: "Company Events",
        icon: "fas fa-building mr-1",
        value: "COMPANY_EVENT",
        createdAt: createdAt,
        updatedAt: updatedAt
    }, {
        uuid: "52b007b1-0cc4-476c-a546-19a03790f7a8",
        label: "Annual Leave",
        icon: "fas fa-sun mr-1",
        value: "ANNUAL_LEAVE",
        createdAt: createdAt,
        updatedAt: updatedAt
    }, {
        uuid: "2f88bafd-be51-4e53-a453-dc8e55e26bd5",
        label: "Medical Leave",
        icon: "fas fa-stethoscope mr-1",
        value: "MEDICAL_LEAVE",
        createdAt: createdAt,
        updatedAt: updatedAt
    }, {
        uuid: "e6b2ba74-7a1a-4d72-a2e1-85e5edbbdf49",
        label: "Undefined",
        icon: "fas fa-question mr-1",
        value: "",
        createdAt: createdAt,
        updatedAt: updatedAt
    }
];