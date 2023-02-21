const getUser = require("../utilities/getUser")

const authServices = {
    signup: (email, password, role) => {
        let user = getUser(email, role);
        let msg = "User already exists with that email"
        if (!user) {
            
        }
    }
}