var http = require("http"),
   fs = require("fs");

//Leer
fs.readFile("./nombre.txt", function (err,html){
    fs.writeFileSync('receptor.txt', html);
});


http.createServer(function (req, res){
 res.write("Copiando contenido de nombre.txt a receptor.txt...");
 res.end ();
}).listen(8080);

/*El programa ejecuta el servidor y cada vez que se hace una peticion
  este lee del archivo nombre.txt y lo escribe en receptor.txt*/ 

/*Hay que destacar que lo que lo hace asincrono es que mientras
 lee puede continuar funcionando y la lectura se realiza en segundo
 plano, lo que le da agilidad al programa*/ 

//Fuente: https://www.youtube.com/watch?v=Q3stHsWowNg