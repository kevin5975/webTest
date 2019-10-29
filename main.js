var http = require('http');
var url = require('url');

var sendData=0;
var ack=0;
var ackack=0;
var message = "there is no communication now. <br> ";

var app = http.createServer(function(request,response){
     var _url = request.url;
     var queryData = url.parse(_url, true).query;

    if((queryData.dat)*= 1 > 0){
    sendData =  queryData.dat;
    message = "sender send data but do not respond now <br>"
    }


    if(queryData.ack == '1'){
    ack = queryData.ack;
    message = "sender sent, and receiver read it <br>"
    }
    else{
      ack = 0;
    }

    if(queryData.ackack == '1'){
      ackack = queryData.ackack;
      message = "receiver responds the answer, and sender read it <br> communication finished ! <br>"
      }
      else{
        ackack = 0;
      }

    console.log(ack);

    var template = `
              <!doctype html>
              <html>
              <head>
                <title>TEST</title>
                <meta charset="utf-8">
              </head>
              <body>
                <h2>sendData : ${sendData}</h2>
                <h2>ack : ${ack} </h2>
                <h2>ack-ack : ${ackack} </h2>

                <p>I wish this will work well.<br>
                ${message} </p>

              </body>
              </html>
              `;
              response.writeHead(200);
              response.end(template);

});


  app.listen(80);
