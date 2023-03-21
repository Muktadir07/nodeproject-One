const passport = require('passport');
const {Strategy} = require('passport-local');
const {MongoClient, ObjectId} = require('mongodb');
const debug = require('debug')('app:localStrategy');


module.exports = function localStrategy(){
    passport.use(new Strategy({
        usernameField:'username',
        passwordField:'password'
    },(username,password,done)=>{
        const uri='mongodb+srv://dbUser:8cjykPvhaZQyVfXP@globomantics.vzibpap.mongodb.net?retryWrites=true&w=majority';
        const dbName='globomantics';

        (async function validateUser(){

            let client;
            try{
                client = await MongoClient.connect(uri);
                debug('connected to the mongodb server');

                const db = client.db(dbName);
                const user = await db.collection('users').findOne({username});
                if(user && user.password ===password){
                    done(null,user);
                }else{
                    done(null,false);
                }

            }catch(error){
                done(error, false)
            }
            client.close();
        }())
    })
    
    );
}