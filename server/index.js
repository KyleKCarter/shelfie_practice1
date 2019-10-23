require('dotenv').config();
const express = require("express");
const massive = require("massive");
const {getInventory, addProduct, editProduct, removeProduct} = require("./controller");

const app = express();

const {CONNECTION_STRING, SERVER_PORT} = process.env;

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
    console.log('Database Connected')
})
.catch(error => {
    console.log(error);
})

app.use(express.json());

app.get('/api/inventory', getInventory);
app.post('/api/inventory', addProduct);
app.put('/api/inventory/:id', editProduct);
app.delete('/api/inventory/:id', removeProduct);

app.listen(SERVER_PORT, () => console.log(`Running on PORT ${SERVER_PORT}.`));