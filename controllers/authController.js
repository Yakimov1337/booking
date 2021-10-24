const router = require('express').Router();
const { body, validationResult } = require('express-validator');

router.get('/register', (req, res) => {
    res.render('register');
});

router.post(
    '/register',
    body('username').isLength({ min: 3 }).withMessage("Username is too short!"), //CHANGE ACCORDING TO REQ
    body('rePass').custom((value, { req }) => {
        if (value != req.body.password) {
            throw new Error('Passwords dont match');
        }
        return true;
    }),

    async (req, res) => {
        const { errors } = validationResult(req);

        try {
            if (errors.length > 0) {
                //TO DO IMPROVE ERROR MSG
                throw new Error('Validation error');
            }

            await req.auth.register(req.body.username, req.body.password);

            res.redirect('/'); //TO DO CHANGE REDIRECT

        } catch (err) {
            console.log(err.message);
            const ctx = {
                errors,
                userData: {
                    username: req.body.username
                }
            }
            res.render('register', ctx);
        }

    }
)

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    try {
        await req.auth.login(req.body.username, req.body.password);
        res.redirect('/') //TODO CHANGE REDIRECT IF NEEDED
    } catch {
        console.log(err.message);
        const ctx = {
            errors: [err.message],
            userData: {
                username: req.body.username
            }
        }
        res.render('login', ctx);
    }
});




module.exports = router;