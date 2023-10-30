const bcrypt = require("bcryptjs");

function hashPassword(password) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
}

function comparePassword(passwordUser, passwordDb) {
  return bcrypt.compare(passwordUser, passwordDb);
}

module.exports = { hashPassword, comparePassword };
