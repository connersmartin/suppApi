const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config();

let mongoose;
try {
  mongoose = require("mongoose");
} catch (e) {
  console.log(e);
}

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors())
app.use(express.urlencoded());
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.json("hello");
  });
    
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
  })
  