const Router = require('express');
const router = new Router();
const controller = require('./authController');
const {check} = require('express-validator');
const authMiddleware = require('./middlewares/authMiddleware')
const roleMiddleware = require('./middlewares/roleMiddleaware')

router.post('/registration', [
    check('username', " Username can't be empty").notEmpty(),
    check('password', " Password need to be more than 4 and less than 10 symbols").isLength({min: 4, max: 10}),
], controller.registration);
router.post('/login', controller.login);
router.get('/users', roleMiddleware(["ADMIN"]), controller.getUsers);

module.exports = router;
