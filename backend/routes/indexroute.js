var express = require('express');
let router = express.Router();
var path = require('path')
var pejs = require('pejs')
var views = pejs();

router.get('/', function (req, res) {
    var indexPagePath = path.join(__dirname, '..', '../frontend/public/page/index.html');
    views.render(indexPagePath, function(err, result) {
        res.send(result);
    })
})
router.get('/page/:pagename', function (req, res) {
    var page = req.params.pagename;
    var pagePath = path.join(__dirname, '..', '..', '/frontend/public/page/' + page + '.html');
    views.render(pagePath, function(err, result) {
        res.send(result);
    })
})
module.exports = router;