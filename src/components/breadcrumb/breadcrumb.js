export default {
    TASKS: [
        {
            active: true,
            label: 'Tasks',
            href: '#'
        }
    ],
    CREATE_TASK: [
        {
            active: false,
            label: 'Tasks',
            href: '#',
            nextPage: 'TASKS'
        }, {
            active: true,
            label: 'New Task',
            href: '#'
        }
    ],
    EDIT_TASK: [
        {
            active: false,
            label: 'Tasks',
            href: '#',
            nextPage: 'TASKS'
        }, {
            active: true,
            label: 'Edit Task',
            href: '#'
        }
    ]
};