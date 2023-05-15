const express = require('express');
const router = express.Router();

// import controller to map with route
const {login} = require("../controller/login");
const {fetchUser} = require("../controller/fetchUser");
const {signup} = require("../controller/signup");
const {makeQuiz} = require("../controller/makeQuiz")
const {attemptedQuiz} = require("../controller/attemptedQuiz")
const {getAllCreatedQuiz} = require("../controller/getAllCreatedQuiz")
const {allStudentQuiz} = require("../controller/allStudentQuiz")
const {fetchAttemptedQuiz} = require("../controller/fetchAttemptedQuiz")
const {oneQuiz} = require("../controller/oneQuiz")
const {teacherAllQuiz} = require("../controller/teacherAllQuiz")
const {fetchQuizScore} = require("../controller/fetchQuizScore")
const {deleteQuiz} = require("../controller/deleteQuiz")

// define routes
router.post("/user/signup",signup);
router.post("/user/login",login);
router.post("/user/fetchuser",fetchUser);
router.post("/user/createquiz",makeQuiz);
router.post("/user/attemptquiz",attemptedQuiz);
router.post("/user/deletequiz",deleteQuiz);
router.get("/user/allquiz",getAllCreatedQuiz);
router.get("/user/allstudentquiz",allStudentQuiz);
router.get("/user/fetchattemptedquiz/:id",fetchAttemptedQuiz);
router.get("/user/onequiz/:id",oneQuiz);
router.get("/user/quizscore/:id",fetchQuizScore);
router.get("/user/teacherquiz/:id",teacherAllQuiz);

// export routes
module.exports = router;