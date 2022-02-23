const express = require("express");
// const path = require("path");
const dotenv = require("dotenv");

const { sequelize } = require("./models");

const indexRouter = require("./routes");
const userRouter = require("./routes/user");

dotenv.config();
const app = express();
app.set("port", process.env.PORT || 3000);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/user", userRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
