const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('D-List.html', function(err,html) {
    if(err)
    {
        throw err;
    }
    
    const server = http.createServer(function(req,res)
    {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/HTML');
        res.write(html);
        res.end();
    });

    server.listen(port, hostname, function()
    {
        console.log('Server has been started on port ' +port);
    });
});
