require("dotenv").config({ path: ".env" });

const server = require("./config/mongodb");

// router
const adminRouter = require("./routes/admin.route");

server.app.use("/api/v1/admin", adminRouter);

server.listenToServer();
