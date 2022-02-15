const { store, get, update, del } = require("./store");



const addMessage = (user, message) => {
    
    return new Promise((resolve, reject) => {

        if (!user || !message) {
            console.log('No existe un usuario o un mensaje');
            reject('Algo ha salido mal intente nuevamente');
        }else{
            const dataUser = {
                user,
                message,
                date: new Date()
            }
            store(dataUser);
            resolve(dataUser);
        }      
    });
}


const getMessage = (user) => {

    const all = get(user);

    return new Promise((resolve, reject) => {
        if (!all) {
            reject('No existen datos en la base de datos');
        }else{
            resolve(all);
        }
    });
}

const deleteMessage = (user) => {
    
    return new Promise((resolve, reject) => {
        const delUser = del(user);
        resolve(delUser);
    });
}

const updateMessage = (id, message) => {

    return new Promise( async(resolve, reject) => {

        if (!id) {
            // console.log('No existe un usuario o un mensaje');
            reject('Debe de enviar un id de identificacion');
            return false;
        }else{
            const res =  update(id, message);
            resolve(res);
        }      
    });
}


module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage
}
