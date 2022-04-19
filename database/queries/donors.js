const Donors = require("../models/Donors");
const BloodBank = require("../models/BloodBank");
let bank = {};
const createDonors = ({ name, bloodGroup, contactNumber, bloodBank }) => {
  console.log(name, bloodGroup, contactNumber, bloodBank, "from query");
  return BloodBank.findOne({ name: bloodBank })
    .then((bloodBank) => {
      if (bloodBank) {
        bank = bloodBank;
        const donor = Donors.create({
          name,
          bloodGroup,
          contactNumber,
          bloodbank: bank._id,
        });
        return donor;
      } else {
        throw new Error("Blood Bank not found");
      }
    })
    .then((data) => data._id)
    .then((donorID) => {
      bank.donors.push(donorID);
      bank.save();
    })
    .catch((err) => console.log(err, "54654"));
};
const findAll = () => Donors.find().populate("bloodbank");

module.exports = {
  createDonors,
  findAll,
};
