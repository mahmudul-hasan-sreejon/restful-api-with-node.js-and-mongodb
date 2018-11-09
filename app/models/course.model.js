const mongoose = require('mongoose');


// Course collection schema
const courseSchema = mongoose.Schema(
    {    
        id: Number,
        name: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Course', courseSchema);