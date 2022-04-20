
const express = require("express");

const app = express();
const port = 3000;

const MongoClient = require("mongodb").MongoClient;

const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");
mongoClient.connect(function(err, client){
    // создание - подключение (обращение) к базе данных usersdb
    const db = client.db("usersdb");
    // создание - подключение к коллеции users
    const collection = db.collection("users");
    // метод command, проверяет подключение к базе данных (наприер: объектом ping);
    db.command({ping: 1}, function(err, result){
        
        if (!err) {
            console.log("Подключение с сервером успешно установлено");
            console.log(result);
        }
        else {
            console.log(err);
        }
    });
    // Получение количества документов в коллекции
    collection.countDocuments((err, result) => {

        if (err) {
            return console.log("Ошибка: " + err);
        }

        console.log(`В коллекции users ${result} документов`);
        client.close();
        console.log("Подключение закрыто!");
    });
});
/*
app.get("/", (request, response) => {
    
    response.send("<h2> Сервер работает </h2>")
});

app.listen(port, () => console.log(`server start, port: ${port}`));

const express = require("express");
const { Db } = require("mongodb");

const app = express();
const port = 3000;

const MongoClient = require("mongodb").MongoClient;

const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");
mongoClient.connect(function(err, client){

    const db = client.db("admin");

    db.command({ping: 1}, function(err, result){
        if (!err) {
            console.log("Подключение с сервером успешно установлено");
            console.log(result);

        }
        else {
            console.log(err);
        }
        client.close();
        console.log("Подключение закрыто!");
        
    });
});
/*
app.get("/", (request, response) => {
    
    response.send("<h2> Сервер работает </h2>")
});

app.listen(port, () => console.log(`server start, port: ${port}`));
*/