
const  Donors= require('../models/Donors');

const createDonors = ({ name, bloodGroup, contactNumber, bloodBank }) => {
	return Donors.create({ name, bloodGroup, contactNumber, bloodBank });
};
const findAll = () => Donors.find();

module.exports = {
  createDonors,
  findAll,
};