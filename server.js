const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config();

app.use(cors())
app.use(express.static('public'));
app.use(express.json());


app.get('/', (req, res) => {
  res.json("hello");
});

//get /share/:id
//will get a given share
app.get('/share/:id', (req, res) => {
  let msg = `You are trying to ${req.method} the id ${req.params.id}`
  res.json(msg);
});

//post /share/:id
//will create a share
app.post('/share/:id', (req, res) => {
  let msg = `You are trying to ${req.method} the id ${req.params.id} with a body of ${JSON.stringify(req.body)}`
  res.json(msg);
});

//put /share/:id
//edit existing share
app.put('/share/:id', (req, res) => {
  let msg = `You are trying to ${req.method} the id ${req.params.id} with a body of ${JSON.stringify(req.body)}`
  res.json(msg);
});

//delete /share/:id
//delete the share
app.delete('/share/:id', (req, res) => {
  let msg = `You are trying to ${req.method} the id ${req.params.id}`
  res.json(msg);
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
