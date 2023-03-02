if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const app = require("./api/index");
const { authenticate, sync } = require("./api/config/db");
const {
  Admin,
  Client,
  Order,
  Driver,
  createAssociations,
} = require("./api/models/index");
const passport = require("passport");
// createAssociations();
// sync();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({ msg: "working well" });
});
app.listen(PORT, "127.5.5.5", (err) => {
  if (err) {
    console.log("an error occurred");
  } else {
    console.log(`Server:: Running on port ${PORT}`);
  }
});
