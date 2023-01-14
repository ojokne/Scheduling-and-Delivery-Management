if (process.env.NODE_ENV != "production") {
    require('dotenv').config()
}
const app = require('./src/index')

const PORT = process.env.PORT || 5000

app.listen(PORT, err => {
    if (err) {
        console.log("an error occurred");
    } else {
        console.log(`Server:: Running on port ${PORT}`);
    }
})