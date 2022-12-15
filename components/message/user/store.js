const db = require("mongoose");
const Model = require("./model");


function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
}

async function getUser(User) {
    /* return list; */
    let filter_user = {};
    
    if (User !== null) {
      filter_user = { user: User };
      console.log(filter_user);
    }
    const messages = await Model.find(filter_user);
    return messages;
  }

module.exports = {
  add: addUser,
  get: getUser
};