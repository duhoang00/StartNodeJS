const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const favicon = require('express-favicon');
const session = require('express-session');

//Middlewares
app.use(cors());
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Import routes
const indexRoute = require("./routes/indexroute");

//Static
app.use(express.static(path.join(__dirname, '..', '/frontend')));

//ROUTES
app.use(indexRoute);

//DATABASE CONNTECTION
const dbConnection = require("./services/db");
// dbConnection.connectToDb();

app.listen(port, () => {
    console.log(`Web app listening at http://localhost:${port}`)
})

module.exports = app;