const express = require("express");
const session = require("express-session");
const passport = require("passport");
const initializePassport = require("./config/passport");
const SQLiteStore = require("connect-sqlite3")(session);
const cors = require("cors");
const routes = require("./routes/index");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(
  cors({
    // origin: ["http://localhost:3000","http://localhost:3001","http://localhost:3002","http://localhost:3003"],
    credentials: true,
    origin: ["http://localhost:3000", "https://ridelink-client.vercel.app"],
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 900000000,
      signed: true,
    },
    store: new SQLiteStore({ db: "session.db", dir: "./" }),
  })
);
app.use(passport.authenticate("session"));

initializePassport(passport);

app.use(routes);
module.exports = app;
