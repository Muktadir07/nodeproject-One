const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const app = express();
const morgan = require('morgan');
const path = require('path');

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
    res.send('hello from my app');
}); 
app.listen(3000,()=>{
    console.log(`listening on port ${chalk.green('3000')}`);
});