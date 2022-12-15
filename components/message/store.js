const db = require("mongoose");
const Model = require("./model");




const list = [];

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterUser) {
  /* return list; */
  return new Promise((resolve, reject) => {
  let filter = {};
  
  if (filterUser !== null) {
    filter = { user: filterUser };
    console.log(filter);
  }
  Model.find(filter)
  .populate('user') 
  .exec((error, populated) => {
    if (error) {
      reject(error);
      return false;
    }
    resolve(populated);
  });
  });
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  });

  foundMessage.message = message;

  const newMessage = await foundMessage.save();
  return newMessage;
}

function removeMessage(id) {
  return Model.deleteOne({
    _id: id,
    
  })
}
module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  remove: removeMessage,
};