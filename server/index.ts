import express, { Express, Request, Response } from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../client/components/App";

const app: Express = express();
const port: string | number = process.env.PORT || 8080;

app.use(express.static(__dirname + '/../build', {
    cacheControl: false
}));
app.use(express.static(__dirname + '/../static', {
    cacheControl: false
}));
app.set("port", port);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use("/test", (request: Request, response: Response) => {
    response.send("Tes t good!");
});

app.get("/", (request: Request, response: Response) => {
    const data = { name: request.query.name as string || "pal" };
    const content: string = ReactDOMServer.renderToString(React.createElement(App, data));
    console.log("state!", data);

    response.render("index", {
        content: content,
        state: JSON.stringify(data)
    });
});

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}...`);
});