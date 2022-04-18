const express = require('express');

 const {
    getDonorsController,
    postDonorsController,
    getPatientsController,
    postPatientsController,
    getBloodBankController,
    postBloodBankController,
} = require('../controller');

const apiRouter = express.Router();
apiRouter.get('/donors', getDonorsController)
apiRouter.post('/donors', postDonorsController)
apiRouter.get('/patients', getPatientsController)
apiRouter.post('/patients', postPatientsController)
apiRouter.get('/blood-bank', getBloodBankController)
apiRouter.post('/blood-bank', postBloodBankController)

module.exports = apiRouter;