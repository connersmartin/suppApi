const express = require('express')
const app = express()
const cors = require('cors')
const repo = require('./repository');

require('dotenv').config();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', process.env.ALLOW_DOMAIN);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  // allow preflight
  if (req.method === 'OPTIONS') {
      res.send(200);
  } else {
      next();
  }
});


app.get('/', (req, res) => {
  res.json("Documentation goes here");
});

//TODO verify input data and error handling

//get /share/:id
//will get a given share
app.get('/share/:id', async (req, res) => {
  let msg = await repo.Find(req.params.id);
  res.json(msg);
});

//post /share/:id
//will create a share
app.post('/share', async (req, res) => {
  let msg = await repo.Add(req.body);
  res.json(msg);
});

//put /share/:id
//edit existing share
app.put('/share/:id', async (req, res) => {
  let msg = await repo.Update(req.params.id, req.body);
  res.json(msg);
});

//delete /share/:id
//delete the share
app.delete('/share/:id', async (req, res) => {
  let msg = await repo.Delete(req.params.id);
  res.json(msg);
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
