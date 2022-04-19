const  BloodBank= require('../models/BloodBank');
const  Donors= require('../models/Donors');
const createBloodBank = ({ name,  contactNumber, city}) => {
	return BloodBank.create({ name,  contactNumber, city});
};
const findAll = () => BloodBank.find().populate('donors');

module.exports = {
  createBloodBank,
  findAll,
};