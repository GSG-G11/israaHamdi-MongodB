const  {createBloodBank} = require('../database/queries/bloodBank')
const postBloodBankController = (req, res) => {
    const {name, city, contactNumber} = req.body
    createBloodBank({name, city, contactNumber})
    .then(()=>res.json({message: 'Blood Bank added'}))
    .catch(err=>console.log(err))
}

module.exports = postBloodBankController