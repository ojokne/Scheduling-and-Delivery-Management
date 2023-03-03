const express = require("express");
const session = require("express-session");
const passport = require("passport");
const initializePassport = require("./config/passport");
const SQLiteStore = require("connect-sqlite3")(session);
const cors = require("cors");
const routes = require("./routes/index");
const app = express();

// const NETLIFY = ["https://ridelink-client.netlify.app"];
const VERCEL = [
  "https://ridelink-client.vercel.app",
  "https://ridelink-admin.vercel.app",
  "https://ridelink-truck-owner.vercel.app",
  "https://ridelink-driver.vercel.app",
];
// const LOCAL = [
//   "http://localhost:3000",
//   "http://localhost:3001",
//   "http://127.1.1.1:3000",
//   "http://127.2.2.2:3002",
// ];
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    // credentials: true,
    origin: [...VERCEL],
  })
);

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     saveUninitialized: false,
//     resave: false,
//     name: "ridelink",
//     cookie: {
//       maxAge: 86400000,
//       signed: true,
//       sameSite: "none",
//       secure: true,
//     },
//     store: new SQLiteStore({ db: "session.db", dir: "./" }),
//   })
// );
// app.use(passport.authenticate());

initializePassport(passport);

app.use(routes);
module.exports = app;
