const {check} = require('express-validator')
const {handleValidator} = require('../utils/handleValidator')

const validatorRegister = [
    check("id").exists().notEmpty().isLength({ min: 3, max: 99 }),
    check("name").exists().notEmpty().isLength({ min: 3, max: 99 }),
    check("lastname").exists().notEmpty().isLength({ min: 3, max: 99 }),
    check("phone").exists().notEmpty().isLength({ min: 3, max: 99 }),
    check("post").exists().notEmpty().isLength({ min: 3, max: 99 }),
    check("area").exists().notEmpty().isLength({ min: 3, max: 99 }),
    check("email").exists().notEmpty().isEmail(),
    check("contraseña").exists().notEmpty().isLength({ min: 3, max: 15 }),
    check("empresaId").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return handleValidator(req, res, next) 
    },
];
const validatorLogin=[
    check("email").exists().notEmpty().isLength({ min: 3, max: 99 }),
    check("contraseña").exists().notEmpty().isLength({ min: 3, max: 15 }),
    (req, res, next) => {
        return handleValidator(req, res, next)
    },
]

module.exports = { validatorRegister,validatorLogin }