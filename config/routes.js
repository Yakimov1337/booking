const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const hotelController = require('../controllers/hotelController');
const userController = require('../controllers/userController.js');



module.exports = (app) => {
    app.use('/', homeController);
    app.use('/user', userController);
    app.use('/auth', authController);
    app.use('/hotels', hotelController);
};