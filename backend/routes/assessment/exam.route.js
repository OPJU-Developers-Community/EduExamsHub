const express = require("express");
const examController = require("../../controllers/assessment/exam.controller");

const router = express.Router();

router.post("/create-new-exam", examController.createNewExam);

module.exports = router;
