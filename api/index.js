const express = require("express");
const session = require("express-session");
const passport = require("passport");
const initializePassport = require("./config/passport");
const SQLiteStore = require("connect-sqlite3")(session);
const cors = require("cors");
const routes = require("./routes/index");
const app = express();

const NETLIFY = ["https://ridelink-client.netlify.app"];
const VERCEL = ["https://ridelink-client.vercel.app"];
const LOCAL = ["http://localhost:3000"];
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(
  cors({
    credentials: true,
    origin: [...NETLIFY, ...VERCEL, ...LOCAL],
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    name: "ridelink",

    cookie: {
      maxAge: 90000000,
      signed: true,
      // sameSite: "none",
      // secure: true,
    },
    store: new SQLiteStore({ db: "session.db", dir: "./" }),
  })
);
app.use(passport.authenticate("session"));

initializePassport(passport);

app.use(routes);
module.exports = app;
