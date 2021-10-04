const express = require('express')
const app = express()
const cors = require('cors')
const repo = require('./repository');

require('dotenv').config();

app.use(express.static('public'));
app.use(express.json());
app.use(cors({
  origin: process.env.ALLOW_DOMAIN,
  methods: ['GET','PUT','POST','DELETE','OPTIONS'],
  allowedHeaders: ["Origin, X-Requested-With, Content-Type, Accept"]
}));

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
  res.statusCode(202);
});

//delete /share/:id
//delete the share
app.delete('/share/:id', async (req, res) => {
  let msg = await repo.Delete(req.params.id);
  res.statusCode(202);
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
