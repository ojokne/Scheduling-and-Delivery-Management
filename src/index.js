const express = require("express")
const session = require("express-session")
const SQLiteStore = require("connect-sqlite3")(session)


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 900000000,
        signed:true
    },
    store: new SQLiteStore({db:"session.db",dir:"./"})
}))

module.exports = app





