import express, { Express, Request, Response } from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../client/components/App";
import StyleContext from 'isomorphic-style-loader/StyleContext';

const app: Express = express();
const port: string | number = process.env.PORT || 8080;

app.use(express.static(__dirname + '/../build', {
    cacheControl: false
}));
app.use(express.static(__dirname + '/../static', {
    cacheControl: false
}));
app.set("port", port);

app.use("/test", (request: Request, response: Response) => {
    response.send("Tes t good!");
});

app.get("/", (request: Request, response: Response) => {
    const data = { name: request.query.name as string || "pal" };
    const css = new Set() // CSS for all rendered React components
    const insertCss = (...styles: any[]) => styles.forEach(style => {
        return css.add(style._getCss())
    })

    const content: string = ReactDOMServer.renderToString(React.createElement(
        StyleContext.Provider,
        { value: { insertCss } },
        React.createElement(App, data)
    ));

    const html = `<!doctype html>
    <html>
      <head>
        <title>Isomorphic Demo 2</title>
        <script src="client.js" defer></script>
        <style>${[...css].join('')}</style>
        <script>
        window.__STATE__ = ${JSON.stringify(data)};
        </script>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>`
    response.status(200).send(html)
});

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}...`);
});