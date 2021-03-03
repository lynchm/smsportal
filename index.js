var express = require('express');
var request = require('request');
var fetch = require('node-fetch');
var util = require('./utils');
var app = express();

app.get('/', function (req, res) {
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   //get token
   request.get({
        headers: {'Content-Type': 'application/json', 
                  'Authorization': 'Basic ' + Buffer('4b939eba-5854-4523-a263-35f86e9157d1:32xlxQrWHQcO2vcYLyOsFKPcSnKZw8dq').toString('base64')},
        url: 'https://rest.smsportal.com/v1/Authentication',
        json: true,
     }, function (error, response, body) {
        console.log(body);
        console.log(body.token);
        const url = 'https://rest.smsportal.com/v1/BulkMessages';
        const options = {
            method: 'POST',
            headers: {Accept: 'application/json', 'Content-Type': 'text/json'}
          };
          var sendRequest = {
            'messages': [ {'content': "Hello SMS World", 'destination': "27787645047"} ]
           };
           //send message
           request.post({
            headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + body.token},
            url: 'https://rest.smsportal.com/v1/bulkmessages',
            json: true,
            body: sendRequest
            }, function (error, response, body) {
            console.log(body);
         });
     });
})

