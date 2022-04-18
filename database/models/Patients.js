const { Schema, model } = require('mongoose');

const patientsSchema = new Schema({
	name: { type: 'string', required: true },
	bloodGroup: { type: 'string', required: true },
});

const patient = model('patient', patientsSchema);

module.exports = patient;