const User = require('../models/User');

async function createUser(username,email,hashedPassword) {

    const user = new User({
        username,
        email,
        hashedPassword,
    });

    await user.save();

    return user;
}


async function getUserByUsername(username) {
    const pattern = new RegExp(`^${username}$`, 'i');
    const user = await User.findOne({ username: { $regex: pattern} });
    return user;
}

async function getUserByEmail(email) {
    const pattern = new RegExp(`^${email}$`, 'i');
    const user = await User.findOne({ email: { $regex:  pattern} });
    return user;
}

async function getBookedHotels(userId){
    const hotels = User.findById(userId);
    return hotels.populate('bookedHotels').lean();
}

module.exports = {
    createUser,
    getUserByUsername,
    getUserByEmail,
    getBookedHotels
};