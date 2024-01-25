require("dotenv").config({ path: ".env" });

const server = require("./config/mongodb");

// router
const adminRouter = require("./routes/admin/admin.route");
const questionRouter = require("./routes/assessment/question.route")
const examRouter = require("./routes/assessment/exam.route")

server.app.use("/api/v1/admin", adminRouter);

server.app.use("/api/v1/question", questionRouter)
server.app.use("/api/v1/exam", examRouter)

server.listenToServer();
