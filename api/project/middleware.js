async function test(req, res, next) {
    console.log(req.body)
    next()
}

module.exports = { test };