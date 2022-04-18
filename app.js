
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (request, response) => {
    
    response.send("<h2> Сервер работает </h2>")
});

app.listen(port, () => console.log(`server start, port: ${port}`));