import moment from 'moment';

import formats from './../../constants/formats';

const createdAt = moment().clone().subtract(20, "days").format(formats.dbDate);
const updatedAt = moment().clone().subtract(10, "days").format(formats.dbDate);

export default [
    {
        uuid: "4e6aa56c-ebc3-4a5c-98c1-887dee684e02",
        title: "Week 5", company: "Company Two", year: "2018",
        createdAt: createdAt, updatedAt: updatedAt,
        days: [
            {
                uuid: "e280a332-e849-4933-b80b-cab116b65bc3",
                date: "2018-11-30", type: "WORK_DAY",
                tasks: "- PROJ01-03: Got started\n- PROJ01-03: Finished"
            }, {
                uuid: "3e08bdb7-97fe-4d3b-8ae7-d2a5cb5d9522",
                date: "2018-11-29", type: "WORK_DAY",
                tasks: "- PROJ02-01: Got started\n- PROJ01-02: Finished"
            }, {
                uuid: "a96cd170-b20e-40bc-9597-b80d416dbdd8",
                date: "2018-11-28", type: "WORK_DAY",
                tasks: "- PROJ01-02: Got started"
            }, {
                uuid: "0eb4808c-e510-4642-b36d-5f090a56977f",
                date: "2018-11-27", type: "WORK_DAY",
                tasks: "- PROJ01-01: Got started\n- PROJ01-01: WIP\n- PROJ01-01: Finished"
            }, {
                uuid: "166f38a2-a0a3-4b1b-9e01-0982a11fc46f",
                date: "2018-11-26", type: "ANNUAL_LEAVE",
                tasks: "Annual Leave (2)"
            }
        ]
    }, {
        uuid: "4c396a64-0cd7-4a27-81cd-579c3b8a66fb",
        title: "Week 4", company: "Company Two", year: "2018",
        createdAt: createdAt, updatedAt: updatedAt,
        days: [
            {
                uuid: "f08b4924-70dd-4092-8c5f-efecc371aed7",
                date: "2018-11-23", type: "ANNUAL_LEAVE",
                tasks: "Annual Leave (1)"
            }, {
                uuid: "30017d2d-844d-4121-a9b7-27a8d39b07be",
                date: "2018-11-22", type: "WORK_DAY",
                tasks: "- Task item\n- Task item\n- Task item"
            }, {
                uuid: "3d94ad13-6d9d-4177-8e3f-651c89ed41f2",
                date: "2018-11-21", type: "WORK_DAY",
                tasks: "- Task item\n- Task item\n- Task item"
            }, {
                uuid: "85247fd6-5261-4fc9-a10b-69858664a745",
                date: "2018-11-20", type: "WORK_DAY",
                tasks: "- Task item\n- Task item\n- Task item"
            }, {
                uuid: "1766f757-7133-4a34-806a-9de2da6f659a",
                date: "2018-11-19", type: "WORK_DAY",
                tasks: "- Task item\n- Task item\n- Task item"
            }
        ]
    }, {
        uuid: "064eea39-279e-4020-acaf-cc9820eaba75",
        title: "Week 3", company: "Company Two", year: "2018",
        createdAt: createdAt, updatedAt: updatedAt,
        days: [
            {
                uuid: "386e9ba1-dd84-41eb-9cd8-0d26c679351f",
                date: "2018-11-23", type: "WORK_DAY",
                tasks: "- Task item\n- Task item\n- Task item"
            }, {
                uuid: "1f57d85c-b5e6-49e4-aa93-c21e47da1739",
                date: "2018-11-22", type: "WORK_DAY",
                tasks: "- Task item\n- Task item\n- Task item"
            }, {
                uuid: "c911bc4a-3dbc-4d60-a643-f2f8e32a0879",
                date: "2018-11-21", type: "WORK_DAY",
                tasks: "- Task item\n- Task item\n- Task item"
            }, {
                uuid: "56966ac4-a541-48f8-9d7b-c213742df43a",
                date: "2018-11-20", type: "MEDICAL_LEAVE",
                tasks: "Medical Leave (1)"
            }, {
                uuid: "b47a4e42-6f2f-4544-949f-6b734ecc394f",
                date: "2018-11-19", type: "WORK_DAY",
                tasks: "- Task item\n- Task item\n- Task item"
            }
        ]
    }, {
        uuid: "a756fa58-8885-4093-bb0b-985df66243fd",
        title: "Week 2", company: "Company Two", year: "2018",
        days: [
            {
                uuid: "0eaf4851-0f73-4aef-b9f8-6f20c886df6a",
                date: "2018-11-16", type: "WORK_DAY",
                tasks: "- Task item\n- Task item\n- Task item"
            }, {
                uuid: "d0f7d152-c7f4-4136-8558-fe968412d0a2",
                date: "2018-11-15", type: "WORK_DAY",
                tasks: "- Task item\n- Task item\n- Task item"
            }, {
                uuid: "ac5c208b-8245-47eb-9eca-307d0010ae7a",
                date: "2018-11-14", type: "WORK_DAY",
                tasks: "- Task item\n- Task item\n- Task item"
            }, {
                uuid: "ea627ac1-7baf-488b-88cd-33664aaea24a",
                date: "2018-11-13", type: "PUBLIC_HOLIDAY",
                tasks: "Public Holiday"
            }, {
                uuid: "d482f11a-a5e0-473f-ad02-7efc4877f1e9",
                date: "2018-11-12", type: "WORK_DAY",
                tasks: "- Task item\n- Task item\n- Task item"
            }
        ]
    }, {
        uuid: "716e290e-d76b-4429-91f3-10ae2e7a66b5",
        title: "Week 1", company: "Company One", year: "2018",
        days: [
            {
                uuid: "d6c94784-ba83-45b2-94d1-a0e219f25aef",
                date: "2018-11-09", type: "WORK_DAY",
                tasks: "- Task item\n- Task item\n- Task item"
            }, {
                uuid: "7888fda0-b9de-43c6-a078-2c14603501a7",
                date: "2018-11-08", type: "WORK_DAY",
                tasks: "- Task item\n- Task item\n- Task item"
            }, {
                uuid: "96a958bd-4ccf-4607-bf73-f696178ff9ec",
                date: "2018-11-07", type: "WORK_DAY",
                tasks: "- Task item\n- Task item\n- Task item"
            }, {
                uuid: "2d1ac25c-e75e-4b0f-9653-101b002a2efb",
                date: "2018-11-06", type: "COMPANY_EVENT",
                tasks: "Company event"
            }, {
                uuid: "16ffdf1b-6506-4211-a811-1c0d7c15b0dd",
                date: "2018-11-05", type: "COMPANY_EVENT",
                tasks: "Company event"
            }
        ]
    }
];