const express = require('express');
const studentsController = require('../controllers/studentsController');
const jsonwebtoken = require('../controllers/jwtPractice');
const tokenVerifyMiddleware = require('../middleware/tokenVerifyMiddleware');
const tokenIssueController = require('../controllers/tokenIssueController');

const router = express.Router();



//mongoose
router.get("/tokenIssue", tokenIssueController.tokenIssue);

// Create
router.post("/insertStudent", tokenVerifyMiddleware, studentsController.insertStudent);

// Read
router.get('/readStudent', tokenVerifyMiddleware, studentsController.readStudent);

// Update
router.post('/updateStudent/:id', tokenVerifyMiddleware, studentsController.updateStudent);

// Delete
router.post('/deleteStudent/:id', tokenVerifyMiddleware, studentsController.deleteStudent);




// Create json web token
router.get('/createToken', jsonwebtoken.createToken);

// Decode JWT
router.get('/decodeToken', jsonwebtoken.decodeToken);






module.exports = router;
