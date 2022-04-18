const { findAll } = require('../database/queries/patients')
const getPatientsController = (req, res) => {
    findAll()
    .then((data)=>res.json(data))
    .catch(err=>console.log(err))
}

module.exports = getPatientsController