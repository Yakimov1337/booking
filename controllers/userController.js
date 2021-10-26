const router = require('express').Router();
const userService = require('../services/userService');

router.get('/', async (req, res) => {
    if (req.user) {
        const hotels = await userService.getBookedHotels(req.user._id);
        const bookedHotels = hotels.bookedHotels;

        res.render('user/profile', { bookedHotels });

    } else {
        res.render('user/profile');

    }
});


module.exports = router;