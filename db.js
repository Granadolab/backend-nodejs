
const mongoose = require('mongoose');

///mongodb+srv://user-chat:<password>@cluster0.s566z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//mongodb+srv://user-chat:7MGjvrgcXU9JAie4@cluster0.s566z.mongodb.net/test?authSource=admin&replicaSet=atlas-ia0s01-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true
mongoose.Promise = global.Promise;
const connect = async(url) => {

  
   await mongoose.connect(url,{
        useNewUrlParser:true
    });
    console.log('[DB] DB connect');
}


module.exports= connect;



