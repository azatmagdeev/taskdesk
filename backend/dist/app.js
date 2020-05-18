const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const mysql = require('mysql');

const server = express();
server.use(cors());
server.use(bodyParser.json());
server.get('/items', (req, res) => {
  return res.send(items);
}); // console.log({mysql});

const connection = mysql.createConnection({
  host: 'eu-cdbr-west-03.cleardb.net',
  user: 'bce339067beb49',
  password: 'c355a978',
  database: 'heroku_3b8511758e2b73a'
});
connection.connect();
connection.query('SELECT * from tasks', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});
connection.end();
server.listen(8888, () => console.log('server started'));