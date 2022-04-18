
const patient = require('../models/Patients');
const connection  = require('../connection');

const createPatients = ({ name, bloodGroup }) => {
  console.log(name, bloodGroup, 'from query');
	return patient.create({ name, bloodGroup });
};
const findAll = () => {
  console.log('from query findAll');
   return patient.find();
}

module.exports = {
  createPatients,
  findAll,
};