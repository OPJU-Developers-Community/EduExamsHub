require("dotenv").config({ path: ".env" });

const server = require("./config/mongodb");

// router
const adminRouter = require("./routes/admin.route");
const questionRouter = require("./routes/question.route")

server.app.use("/api/v1/admin", adminRouter);
server.app.use("/api/v1/question", questionRouter)

server.listenToServer();
