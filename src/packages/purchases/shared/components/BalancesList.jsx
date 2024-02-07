import { v4 as uuidv4 } from 'uuid';

export default 
[
    {
        key: uuidv4(),
        amount: 0,
        cap: 'Overdue'
    },
    {
        key: uuidv4(),
        amount: 0,
        cap: 'Open'
    },
    {
        key: uuidv4(),
        amount: 0,
        cap: 'Paid'
    },
];