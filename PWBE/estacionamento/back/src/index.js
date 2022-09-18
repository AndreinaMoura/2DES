const Express = require('express');
const cors = require('cors');

const routes = require('./routes.js');

const app = Express();
app.use(Express.json());
app.use(cors());
app.use(routes);

app.listen(5000, () =>{
    console.log("Respondendo 5000")
})