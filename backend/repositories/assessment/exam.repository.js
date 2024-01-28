const { examModel } = require("../../models/assessment/exam.model");
const CrudRepository = require("../crud.repository");

class ExamRepository extends CrudRepository {
  constructor() {
    super(examModel);
  }
}

module.exports = ExamRepository;
