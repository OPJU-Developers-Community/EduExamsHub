const {mongoose, Schema} = require("mongoose")

const examSchema = new Schema (
    {
        course_code: {
            type: String,
            require: true,
            unique: true
        },
        course: {
            type: String,
            require: true
        },
        semester: {
            type: Number,
            require: true,
        },
        subject: {
            type: String,
            require: true,
        },
        max_marks: {
            type: Number,
            require: true,
        },
        exam_rules: {
            type: String,
            require: true,
        },
        questions: {
            type: [String],
        },
        start_date: {
            type: Date,
            require: true,
        },
        end_date: {
            type: Date,
            require: true,
        }
    }
)

const examModel = mongoose.model("Exam", examSchema)

module.exports = examModel;