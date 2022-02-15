const { store, get, update, del } = require("./store");





const addName = (name) => {
    
    return new Promise((resolve, reject) => {

        if (!name) {
            console.log('No existe un usuario');
            reject('Algo ha salido mal intente nuevamente');
        }else{
           const data =  store({name:name});
            resolve(data);
        }      
    });
}


const getName = () => {
    const all = get();
    return new Promise((resolve, reject) => {
        resolve(all);
    });
}

const deleteName = (id) => {
    
    return new Promise((resolve, reject) => {
        const delName = del(id);
        resolve(delName);
    });
}

const updateName = (id, name) => {

    return new Promise( async(resolve, reject) => {

        if (!id) {
            // console.log('No existe un usuario o un mensaje');
            reject('Debe de enviar un id de identificacion');
            return false;
        }else{
            const res =  update(id, name);
            resolve(res);
        }      
    });
}


module.exports = {
    addName,
    getName,
    deleteName,
    updateName
}