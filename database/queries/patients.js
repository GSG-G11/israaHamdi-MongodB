
const patient = require('../models/Patients');
const connection  = require('../connection');

const createPatients = ({ name, bloodGroup }) => {
	return patient.create({ name, bloodGroup });
};
const findAll = () => {
   return patient.find();
}

module.exports = {
  createPatients,
  findAll,
};