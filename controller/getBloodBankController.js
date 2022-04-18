const {findAll} = require('../database/queries/bloodBank')
const getBloodBankController = (req, res) => {
    findAll()
    .then((data)=>res.json(data))
    .catch(err=>console.log(err))
}

module.exports = getBloodBankController