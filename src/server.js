import express from 'express';
import Coinz from './coinz';

var app = express();

if (process.argv.slice(2).length != 2) {
  console.log('Please add a Port and Username parameter to your call');
} else {
  const PORT = process.argv[2];
  const NAME = process.argv[3];

  app.get('/', function(req, res) {
    res.send('Hello World!');
  });

  app.listen(PORT, function (){
    console.log(`Currently listening on port ${PORT}!`);
  });

  let UserCoinz = new Coinz(NAME);

  UserCoinz.print_state(NAME);
}
