const express = require('express');

const { PORT } = require('./config');
const databaseConfig = require('./config/database');
const expressConfig = require('./config/express');


start();

async function start() {
    const app = express();

    await databaseConfig(app);
    expressConfig(app);

    app.get('/', (req, res) => {

    });

    app.listen(PORT, () => console.log(`Application started at http://localhost:${PORT}`));
}
