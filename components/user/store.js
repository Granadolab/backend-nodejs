const Model = require('./model');


const store = user => {

    const newuser = new Model(user);
    return  newuser.save();
}
const get = async () => {

    const findedName = await Model.find();
    return findedName;

}

const update = async (id, name) => {
    const updatedUser = await Model.findOneAndUpdate({_id: id},{name:name},{ new: true});
    return updatedUser;
}



const del = async (id) => {
    const deleteuser = await Model.deleteOne({_id: id});
    return deleteuser;
}


module.exports ={
    store,
    get,
    update,
    del
}