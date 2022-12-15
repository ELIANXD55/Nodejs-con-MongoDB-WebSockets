const store = require('./store');


function addUser(name) {
    if (!name) {
        return Promise.reject('Invalid name');
    }
    const user = {
        name,
    };
    return store.add(user);
}

function getUser(User) {
    return new Promise((resolve, reject) => {
      resolve(store.get(User));
    });
  }
  









module.exports = {
addUser,
getUser,
}