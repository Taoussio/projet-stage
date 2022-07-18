process.env.HUBSPOT_API_KEY = '03a4b4a0-c567-4ac7-b075-87e619ec4254';

//promisify
const express = require('express');
const app = express();

// le code que je viens de rajouter
// const express = require('express');
// var bodyParser = require('body-parser')
// const app = express();

// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
//   });

//   app.post('/', urlencodedParser, (req, res) => {
//       console.log('Got body:', req.body);
//       res.sendStatus(200);
//   });

//   app.listen(3000);
// *******************************


app.use(express.static('public'));
app.use(express.static('js'));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', './views');


const hubspot_model = require('./hubspot/hubspot_model')([
  require('./hubspot/hubspot_entreprise'),
  require('./hubspot/hubspot_transaction'),
  require('./hubspot/hubspot_contact'),
]);


//console.log(process.env.HUBSPOT_API_KEY);

const main = async () => {
  const rep = await hubspot_model.testConnection();
  //console.log(rep);

  let testvar = {}

  const rep2 = await hubspot_model.getTransactions(testvar);

  //console.log(rep2.results);
  
}
app.get('/', (req, res) => {
  res.render('index');
})

main();


app.get('/', (req, res) => {
  res.render('index');
})

app.get('/transaction', async (req, res) => {
  const rep2 = await hubspot_model.getTransactions({
    dealname: req.query.dealname,
  });
  res.send({
    dealname: req.query.dealname,
    resuslt: rep2
  });
})



app.listen(3000);