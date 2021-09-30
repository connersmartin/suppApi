const express = require('express')
const app = express()
const cors = require('cors')
const repo = require('./repository');

require('dotenv').config();

app.use(cors())
app.use(express.static('public'));
app.use(express.json());

const allow = process.env.ALLOW_DOMAIN;
const corsOptions = {
  origin: allow
}


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
app.put('/share/:id', cors(corsOptions), async (req, res) => {
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
