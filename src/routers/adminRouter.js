const express= require('express');
const debug = require('debug')('app:adminRouter');
const {MongoClient} = require('mongodb');

const adminRouter = express.Router();
const sessions = require('../data/sessions.json');

adminRouter.route('/').get((req,res)=>{
   
   
});

module.exports = adminRouter;