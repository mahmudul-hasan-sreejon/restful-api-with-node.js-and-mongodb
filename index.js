const bodyParser = require("body-parser");
const express = require("express");
// create express app
const app = express();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

/////////////////////////////////////////// Routes ////////////////////////////////////////////////

// GET Method
app.get("/api/courses", (req, res) => {
    res.send("Hello world!!!");
});

// app.get("/api/courses/:id", (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if(!course) return res.status(404).send("Not found...");

//     res.send(course);
// });

// POST Method
// app.post("/api/courses", (req, res) => {
//     const result = validateCourse(req.body);
//     if(result.error) return res.status(400).send(result.error.details[0].message);

//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     };
//     courses.push(course);

//     res.send(course);
// });

// PUT Method
// app.put("/api/courses/:id", (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if(!course) return res.status(404).send("Not found...");

//     const result = validateCourse(req.body);
//     if(result.error) return res.status(400).send(result.error.details[0].message);

//     course.name = req.body.name;

//     res.send(course);
// });

// DELETE Method
// app.delete("/api/courses/:id", (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if(!course) return res.status(404).send("Not found...");

//     const index = courses.indexOf(course);
//     courses.splice(index, 1);

//     res.send(course);
// });
/////////////////////////////////////////// Routes ////////////////////////////////////////////////

// Port mapping;
const port = process.env.PORT || 3000;
// listen for requests
app.listen(port, () => console.log(`Listening on port ${port}...`));