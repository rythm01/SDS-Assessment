const express = require('express');
const app = express();
const chalk = require('ansi-colors');
require('dotenv').config();
const models = require('./models/');
const cors = require('cors');

// CORS setup
app.use(cors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

app.locals.models = models;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Routes
app.get('/', (req, res) => {
    res.send('Hello, Warm Regards from Sublime Data Systems(SDS)!');
});

app.use('/api', require('./Routes'));

// Error handling middleware 
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'An internal server error occurred.' });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log(chalk.green('SDS BACKEND'));
    console.log(chalk.green(`Environment Running in: ${process.env.PORT}`));
    console.log(chalk.green(`Port: ${process.env.PORT}`));
    console.log(chalk.green(`API Link: http://localhost:${process.env.PORT}/api`));
    console.log('-----------------------------');
    console.log('-----------------------------');
    console.log(`Server is running on port ${port}`);
});
