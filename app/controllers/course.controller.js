const Course = require('../models/course.model.js');


// Retrieve and return all courses from the database
exports.findAll = (req, res) => {
    // finding all the courses from the database
    Course.find()
    .then(courses => {
        return res.send(courses);
    }).catch(error => {
        return res.status(500).send({ message: error.message || "Some error occurred while retrieving notes." });
    });
};

// Find a single course with a id
exports.findOne = (req, res) => {
    // Finding the course with the given id from the database
    Course.findOne({ id: req.params.id })
    .then(course => {
        if(!course) return res.status(404).send({ message: `Course not found with id ${req.params.id}` });
        return res.send(course);
    }).catch(error => {
        if(error.kind === 'ObjectId') return res.status(404).send({ message: `Course not found with id ${req.params.id}` });
        return res.status(500).send({ message: `Error retrieving course with id ${req.params.id}` });
    });
};

// Create and Save a new course
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) return res.status(400).send({ message: "Course name can not be empty" });

    // Count the existing documents
    Course.countDocuments({})
    .then(count => {
        // Create a course
        const course = new Course(
            {
                id: count + 1,
                name: req.body.name
            }
        );

        // Save the new course in the database
        course.save()
        .then(data => {
            return res.send(data);
        }).catch(error => {
            return res.status(500).send({ message: error.message || "Some error occurred while creating the course" });
        });
    }).catch(error => {
        return res.status(400).send( { message: error.message || "Documents size count error" });
    });
};

// Update a course identified by the id in the request
exports.update = (req, res) => {
    // Validate request
    if(!req.body.name) return res.status(400).send({ message: "Course name can not be empty" });

    // Find course and update it with the request body
    Course.findOneAndUpdate({ id: req.params.id }, { $set: { name: req.body.name } }, { new: true })
    .then(course => {
        if(!course) return res.status(404).send({ message: "Course not found with id " + req.params.id });
        return res.send(course);
    }).catch(error => {
        if(error.kind === 'ObjectId') return res.status(404).send({ message: "Course not found with id " + req.params.id });
        return res.status(500).send({ message: "Error updating course with id " + req.params.id });
    });
};

// Delete a course with the specified id in the request
exports.delete = (req, res) => {
    // Deleting the course with the given id from the database
    Course.findOneAndDelete({ id: req.params.id })
    .then(course => {
        if(!course) return res.status(404).send({ message: `Course not found with id ${req.params.id}` });
        return res.send(course);
    }).catch(error => {
        if(error.kind === 'ObjectId') return res.status(404).send({ message: `Course not found with id ${req.params.id}` });
        return res.status(500).send({ message: `Error retrieving course with id ${req.params.id}` });
    });
};