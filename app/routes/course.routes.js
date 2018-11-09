module.exports = (app) => {
    const courses = require('../controllers/course.controller.js');

    // Retrieve all courses
    app.get('/api/courses', courses.findAll);

    // Retrieve a single course with id
    app.get('/api/courses/:id', courses.findOne);

    // Create a new course
    app.post('/api/courses', courses.create);

    // Update a course with id
    app.put('/api/courses/:id', courses.update);

    // Delete a course with id
    app.delete('/api/courses/:id', courses.delete);
}