const mongoose = require('mongoose')

// Create the results moodel
let resultsModel = mongoose.model('results', {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    links: [{
        title: String,
        url: String
    }]
})

module.exports = resultsModel