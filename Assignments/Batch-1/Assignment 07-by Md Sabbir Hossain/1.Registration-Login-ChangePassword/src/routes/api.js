const express = require('express');
const registrationController = require('../Controllers/registrationController')
const router = express.Router();


router.post("/createProfile", registrationController.createProfile)
router.post("/login", registrationController.login)
router.post("/changePassword", registrationController.changePassword)



module.exports = router;