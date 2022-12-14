const db = require("mongoose");

"mongodb+srv://elianxd:LUZUFLOO777@telegrum.jnbuyhs.mongodb.net/?retryWrites=true&w=majority",
    
db.Promise = global.Promise;

async function  connect(url) {
await db.connect(url,{ useNewUrlParser: true })
    .then(() => console.log("[db] Conectada con éxito"))
    .catch((err) => console.error("[db]", err));
    console.log("[db] Conectada con exito");
}


module.exports = connect;




