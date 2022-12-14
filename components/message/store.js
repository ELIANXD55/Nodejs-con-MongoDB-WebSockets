const db = require("mongoose");
const Model = require("./model");



db.Promise = global.Promise;

db.connect(
  "mongodb+srv://elianxd:LUZUFLOO777@telegrum.jnbuyhs.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
)
  .then(() => console.log("[db] Conectada con éxito"))
  .catch((err) => console.error("[db]", err));
console.log("[db] Conectada con exito");

const list = [];

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterUser) {
  /* return list; */
  let filter = {};
  
  if (filterUser !== null) {
    filter = { user: filterUser };
    console.log(filter);
  }
  const messages = await Model.find(filter);
  return messages;
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  });

  foundMessage.message = message;

  const newMessage = await foundMessage.save();
  return newMessage;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
};