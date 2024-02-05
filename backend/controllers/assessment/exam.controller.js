const ApiError = require("../../utils/common/error-response");
const httpStatusCodes = require("../../utils/common/status-codes");
const ApiSuccess = require("../../utils/common/success-response");

const { validateExamReqBody } = require("../../models/assessment/exam.model");
const { createNewExam } = require("../../services/assessment/exam.service");

class ExamController {
  async createNewExam(req, res) {
    const { value, error } = validateExamReqBody(req.body);

    if (error) {
      ApiError.error = error;
      ApiError.message = error.details[0].message;

      return res.status(httpStatusCodes.BAD_REQUEST).json(ApiError);
    }

    try {
      const response = await createNewExam(value);

      ApiSuccess.message = "Exam created successfully";
      ApiSuccess.data = [];

      return res.status(httpStatusCodes.CREATED).json(ApiSuccess);
    } catch (error) {
      ApiError.error = error;
      ApiError.message = error.explanation;
      return res.status(error.statusCode).json(ApiError);
    }
  }
}

const examController = new ExamController();

module.exports = examController;
