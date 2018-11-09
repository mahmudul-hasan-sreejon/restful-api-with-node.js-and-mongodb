module.exports = (app) => {
    const courses = require('../controllers/course.controller.js');

    
    // Retrieve all courses
    app.get('/api/courses', courses.findAll); // GET Method

    // Retrieve a single course with id
    app.get('/api/courses/:id', courses.findOne); // GET Method

    // Create a new course
    app.post('/api/courses', courses.create); // POST Method

    // Update a course with id
    app.put('/api/courses/:id', courses.update); // PUT Method

    // Delete a course with id
    app.delete('/api/courses/:id', courses.delete); // DELETE Method
}