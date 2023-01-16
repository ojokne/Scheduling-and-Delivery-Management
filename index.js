if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const app = require("./src/index");
const { authenticate } = require("./src/config/db");

const PORT = process.env.PORT || 5000;
authenticate();
app.listen(PORT, (err) => {
  if (err) {
    console.log("an error occurred");
  } else {
    console.log(`Server:: Running on port ${PORT}`);
  }
});
