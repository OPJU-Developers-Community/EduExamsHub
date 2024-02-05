const ExamRepository = require("../../repositories/assessment/exam.repository");
const httpStatusCodes = require("../../utils/common/status-codes");
const AppError = require("../../utils/errors/app.error");
const dateFns = require("date-fns");

const examRepository = new ExamRepository();

async function createNewExam(data) {
  try {
    const {
      course_code,
      course,
      semester,
      subject,
      max_marks,
      exam_rules,
      start_date,
      end_date,
    } = data;

    const startDate = new Date(start_date);
    const endDate = new Date(end_date);

    // console.log(dateFns.formatISO(new Date(), "dd/MM/yyyy - hh:mm aaa"));

    const formattedStartDate = startDate.toISOString().split("T")[0];
    const formattedEndDate = endDate.toISOString().split("T")[0];

    const newExam = await examRepository.create({
      course_code,
      course,
      semester,
      subject,
      max_marks,
      exam_rules,
      start_date: formattedStartDate,
      end_date: formattedEndDate,
    });

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
