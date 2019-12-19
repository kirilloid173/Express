// подключение express
const express = require("express");
// создаем объект приложения
const app = express();
// определяем обработчик для маршрута "/"
/*  
app.get("/", function(request, response){
     
    // отправляем ответ
     response.send("<h2>Привет Express!</h2>");
});
// начинаем прослушивать подключения на 3000 порту
*/
app.get("/about", function(request, response, next){
console.log("First");
next();
});
app.get("/about2", function(request,response, next){
console.log("Second");
next();
});
app.get("/home", function(request, response, next){
response.sendStatus(404);
  next();
});
app.get("/link", function(request,response,next){
response.redirect("https://vk.com/kirilloid173");
  next();
});
app.use(function (request, response) {
  response.sendFile(__dirname + "/index1.html");
});
app.listen(3000);