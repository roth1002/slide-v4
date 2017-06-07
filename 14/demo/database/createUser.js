const bcrypt = require('bcryptjs');
const User = require('./User');

async function createUser(email, password) {
  const hash = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    password: hash,
  });

  user.log();
  console.log('Password: ', user.attributes.password);

  await user.save();

  return user;
}

module.exports = createUser;
