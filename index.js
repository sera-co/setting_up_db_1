const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;
app.use(express.json())

app.use(express.static('static'));

mongoose
.connect(process.env.DB_URL)
.then(()=>console.log('successfully connected to database'))
.catch((err)=>console.log("Error connecting",err))
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
