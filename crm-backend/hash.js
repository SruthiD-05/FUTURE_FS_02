const bcrypt = require("bcryptjs");

const password = "admin123"; // you can change this
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(password, salt);

console.log("Hashed Password:", hashedPassword);
