const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'Misael',
        edad: 21,
        url: req.url
    }
    res.write(JSON.stringify(salida))
        //res.write("Hola munda, desde nodejs!");
    res.end();

}).listen(8080);
console.log("escuchando en el puerto 8080");