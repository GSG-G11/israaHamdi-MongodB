const  {createDonors} = require('../database/queries/donors')
const postDonorsController = (req,res) => {
    const {name, bloodGroup, contactNumber, bloodBank} = req.body
    createDonors({name, bloodGroup, contactNumber, bloodBank})
    .then(()=>res.json({message: 'Donor added'}))
    .catch(err=>console.log(err))
}

module.exports = postDonorsController