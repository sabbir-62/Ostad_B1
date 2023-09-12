const express = require('express');
const registrationController = require('../Controllers/registrationController')
const userAuthentication = require('../middleware/userAuthentication')
const ToDoListController = require('../Controllers/ToDoListController')
const router = express.Router();


router.post("/createProfile", registrationController.createProfile)
router.post("/login", registrationController.login)

router.get("/selectUser", userAuthentication, registrationController.selectUser)
router.post("/updateUser", userAuthentication, registrationController.updateUser)

router.post("/createToDo", userAuthentication, ToDoListController.createToDo)
router.get("/selectToDo", userAuthentication, ToDoListController.selectToDo)
router.post("/updateToDo", userAuthentication, ToDoListController.updateToDo)
router.post("/updateStatusToDo", userAuthentication, ToDoListController.updateStatusToDo)
router.post("/removeToDo", userAuthentication, ToDoListController.removeToDo)
router.get("/selectToDoByStatus", userAuthentication, ToDoListController.selectToDoByStatus)
router.get("/selectToDoByDate", userAuthentication, ToDoListController.selectToDoByDate)

router.post("/changePassword", registrationController.changePassword)



module.exports = router;