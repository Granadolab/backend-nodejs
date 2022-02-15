const Model = require('./model');


const store = message => {
    // list.push(message);
    const newmsj = new Model(message);
    newmsj.save();
}

const update = async (id, msj) => {
    const msjs = await Model.findOneAndUpdate({_id: id},{message:msj},{ new: true});
    return msjs;
}

const get = async (user) => {

    let filter = {};

    if (user !== null) {
        filter = {user:user}
    }
   
    const msjs = await Model.find(filter);
    return msjs;

}


const del = async (id) => {
    const msjs = await Model.deleteOne({_id: id});
    return msjs;
}


module.exports ={
    store,
    get,
    update,
    del
}