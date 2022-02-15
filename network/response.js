const  success = (req, res, mess, status) => {

    res.status(status || 200).send({
        // error:'',
        body:mess
    });

} 

const  error = (req, res, mess, status) => {

    res.status(status || 500).send({
        error:mess,
        // body:''
    });

} 



module.exports = {
    success,
    error
}