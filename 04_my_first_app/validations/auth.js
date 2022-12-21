import {body} from 'express-validator';

export const registerValidation = [
    body('email', 'Wrong email form').isEmail(),
    body('password', 'Password need to have min 5 symbols').isLength({min: 5}),
    body('fullName', 'Enter full name').isLength({min: 3}),
    body('avatarUrl', 'Wrong avatar url').optional().isURL(),
]