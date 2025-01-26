import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../src/App";
import "../src/styles.css";

const app = express();

app.use(express.static("dist"));

app.get("/", (req, res) => {
  const appString = renderToString(<App />);

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR React App</title>
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body>
        <div id="root">${appString}</div>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
