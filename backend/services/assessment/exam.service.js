const ExamRepository = require("../../repositories/assessment/exam.repository");
const httpStatusCodes = require("../../utils/common/status-codes");
const AppError = require("../../utils/errors/app.error");
const dateFns = require("date-fns");

const examRepository = new ExamRepository();

async function createNewExam(data) {
  try {
    // const {
    //   course_code,
    //   course,
    //   semester,
    //   subject,
    //   max_marks,
    //   exam_rules,
    //   start_date,
    //   end_date,
    // } = data;

    const newExam = await examRepository.create(data);

    return newExam;
  } catch (error) {
    throw new AppError(
      "Something went wrong while exam creation",
      httpStatusCodes.SERVER_ERROR
    );
  }
}

module.exports = {
  createNewExam,
};
