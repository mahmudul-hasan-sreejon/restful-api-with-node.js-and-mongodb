
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!!!");
});

app.get("/api/courses", (req, res) => {
    res.send([9, 8, 7]);
});

app.get("/api/courses/:name/:id", (req, res) => {
    // /api/courses/math/01
    res.send(req.params);

    // /api/courses/math/01?sortBy=name
    res.send(req.query);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));