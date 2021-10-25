const hotel  = require('../services/hotelService');



module.exports = () => (req, res, next) => {
    //TO DO IMPORT and decorete SERVICES

    req.storage() = {
        ...hotel,
    };
}