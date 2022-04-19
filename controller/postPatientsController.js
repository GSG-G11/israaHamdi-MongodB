require('dotenv').config();
const { createPatients } = require('../database/queries/patients')
const postPatientsController = (req, res) => {

  const { name, bloodGroup } = req.body;
  createPatients({name, bloodGroup})
  .then((data)=> res.send(data))
  .catch((err)=>console.log(err))

}

module.exports = postPatientsController