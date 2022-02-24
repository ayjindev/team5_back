const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const { sequelize } = require("./models");

const registerRouter = require("./routes/register");

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

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/serverApi/register", registerRouter);

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "index.html")); //새로고침 및 URL 검색 방지
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
