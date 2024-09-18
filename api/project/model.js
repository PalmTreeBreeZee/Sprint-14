// build your `Project` model here
// needs a post and a get
const db = require('../../data/dbConfig')

function find() {
    return db('projects')
}

module.exports = { find }