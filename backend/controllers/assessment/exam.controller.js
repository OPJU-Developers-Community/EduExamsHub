const examModel = require("../../models/assessment/exam.model");
const ApiError = require("../../utils/common/error-response");
const ApiSuccess = require("../../utils/common/success-response")

class ExamController {

    async createQuestion(req, res) {

        try {
            const {course_code, course, semester, subject, max_marks, exam_rules, questions, start_date, end_date} = req.body;

            const startDate = new Date(start_date);
            const endDate = new Date(end_date);
        
            // Get the current date
            const formattedStartDate = startDate.toISOString().split('T')[0];
            const formattedEndDate = endDate.toISOString().split('T')[0];

            const newExam = new examModel({
                course_code, 
                course, 
                semester, 
                subject,
                max_marks, 
                exam_rules,
                questions,
                start_date: formattedStartDate,
                end_date: formattedEndDate,
            })

            await newExam.save()

            ApiSuccess.message = "Exam created successfully"
            
            return res.status(200).json(ApiSuccess)

        } catch (error) {
            ApiError.error = error
            return res.status(500).json(ApiError)
        }
    }
}

const examController = new ExamController();

module.exports = examController