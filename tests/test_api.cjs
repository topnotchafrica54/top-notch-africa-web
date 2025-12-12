const http = require('http');

const data = JSON.stringify({
    title: 'Test Node Post',
    content: 'Content from script',
    category: 'News'
});

const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/news',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    res.on('data', (d) => {
        process.stdout.write(d);
    });
});

req.on('error', (error) => {
    console.error(error);
});

req.write(data);
req.end();
