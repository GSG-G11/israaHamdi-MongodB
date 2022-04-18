const { Schema, model } = require('mongoose');

const donorsSchema = new Schema({
	name: { type: 'string', required: true },
	bloodGroup: { type: 'string', required: true },
    contactNumber : { type: 'number', required: true },
    bloodbank: {
		type: Schema.Types.ObjectId,
		ref: 'BloodBank',
	},
});

const Donors = model('donor', donorsSchema);

module.exports = Donors;