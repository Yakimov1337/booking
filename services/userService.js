const User = require('../models/User');

async function createUser(username, hashedPassword,email) {

    const user = new User({
        username,
        hashedPassword,
        email
    });

    await user.save();

    return user;
}


async function getUserByUsername(username) {
    const pattern = new RegExp(`^${username}$`, 'i');
    const user = await User.findOne({ username: { $regex: username, $options: pattern} });
    return user;
}

async function getUserByEmail(username) {
    const pattern = new RegExp(`^${email}$`, 'i');
    const user = await User.findOne({ username: { $regex: email, $options: pattern} });
    return user;
}


module.exports = {
    createUser,
    getUserByUsername,
    getUserByEmail
};