
module.exports = function(app) {
    app.get('/', function(req, res, next) {
        res.send(['football', 'houses', 'playground', 'music']);
        console.log('get and send data')
    });
}