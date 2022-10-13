require('dotenv').config();
const PORT = process.env.PORT || 3000
const express = require();
const cors = require();
const app = express();
app.use(express.json())
    .use(cors())
    .listen(PORT, () => {
        console.log("respondendo na porta " + PORT);
    });

// dotenv import
// npm i cors mysql nodemon dotenv