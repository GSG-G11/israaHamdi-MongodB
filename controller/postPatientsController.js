require('dotenv').config();
const { createPatients } = require('../database/queries/patients')
const postPatientsController = (req, res) => {
  console.log(process.env.DB_URL, 'process.env.DB_URL');
    console.log(req.body, 'form controlller')
  const { name, bloodGroup } = req.body;
  createPatients({name, bloodGroup})
  .then((data)=> res.send(data))
  .catch((err)=>console.log(err))

}

module.exports = postPatientsController