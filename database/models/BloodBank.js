const { Schema, model } = require('mongoose');

const bloodBanksSchema = new Schema({
    name: { type: 'string', required: true },
	contactNumber: { type: 'number', required: true },
    city: { type: 'string', required: true },
    donors : [{
        type: Schema.Types.ObjectId,
		ref: 'donors',
    }]
});

const BloodBank = model('bloodbanks', bloodBanksSchema);

module.exports = BloodBank;