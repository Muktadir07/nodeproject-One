const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const sessions = require('./src/data/sessions.json');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 3000
const app = express();
const sessionRouter = express.Router();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views','./src/views');
app.set('view engine', 'ejs');

sessionRouter.route('/')
    .get((req, res) =>{
        res.render('sessions', { 
            sessions
        });
    });
sessionRouter.route('/:id').get((req, res) =>{
        const id = req.params.id;
        res.render('session', { 
            session: sessions[id],
        });
    });

app.use('/sessions/', sessionRouter);

app.get('/', (req, res) => {
    res.render('index',{title: 'Welcome to Globalmantics'});
}); 
app.listen(PORT,()=>{
    debug(`listening on port ${chalk.green(PORT)}`);
});