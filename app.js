const express = require("express");
const path = require("path");

const indexRouter = require("./routes");
const userRouter = require("./routes/user");

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/user", userRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
