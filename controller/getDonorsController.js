const  {findAll} = require('../database/queries/donors')
const getDonorsController = (req, res) => {
    findAll()
    .then((data)=>res.json(data))
    .catch(err=>console.log(err))
}

module.exports = getDonorsController
