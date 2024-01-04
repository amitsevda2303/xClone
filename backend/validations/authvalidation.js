const { body } = require('express-validator');
const { Error } = require('mongoose');

const newUserCheck = [
    body('email')
        .optional()
        .custom((value) => {
            if (value !== null && value !== "" && !value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
                throw new Error('Invalid email address');
            }

            return true;
        }),

    body('mobile')
        .optional()
        .custom((value) => {
            if (value !== null && value !== "" && !/^[0-9]{10}$/.test(value.toString())) {
                throw new Error('Mobile number must be 10 digits');
            }

            return true;
        }),
        body('password').custom((value) =>{
            if (value == null || value.length < 8) {
                throw new Error ('Password is too small plese enter atleast 8 characters');
            }
            return true;
        }),

    body()
        .custom((value, { req }) => {
            const { email, mobile } = req.body;
console.log(value,email)
            if ((email !== null && email !== '') && !email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
                throw new Error('Invalid email address');
            }

            if ((mobile !== null && mobile !== '') && !/^[0-9]{10}$/.test(mobile.toString())) {
                throw new Error('Mobile number must be 10 digits');
            }
             if ((mobile !== null && mobile !== '') && (email !== null && email !== '')) {
                throw new Error("Either email or mobile is required, but not both");
            }

            if ((mobile === null || mobile === '') && (email === null || email === '')) {
                throw new Error('Either email or mobile is required');
            }

            return true;
        }),
];

module.exports = newUserCheck;