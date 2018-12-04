const http = require('http');
const os = require('os');
const querystring = require('querystring');

function wait(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function load() {
  while (true) {
    const postData = querystring.stringify({
      'topic': 'http://mercure/demo/server/1.jsonld',
      'data': JSON.stringify({
        totalMem: os.totalmem(),
        freeMem: os.freemem(),
      }),
    });

    const req = http.request({
      hostname: 'mercure',
      port: '80',
      path: '/hub',
      method: 'POST',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InN1YnNjcmliZSI6WyIqIl0sInB1Ymxpc2giOlsiKiJdfX0.uX1aQvHMththTb5s7Gpe47ma69PUzjjWy3MAY8-Orho',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData),
      }
    }, (res) => {
      console.log(`Status: ${res.statusCode}`);
      console.log(`Headers: ${JSON.stringify(res.headers)}`);
    });

    req.on('error', (e) => {
      console.error(`An error occured: ${e.message}`);
    });
    req.write(postData);
    req.end();

    await wait(10000);
  }
}

load();
