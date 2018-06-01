var express = require('express');
var router = express.Router();

function prepareResponse(req) {
    var response = {
        success: false,
        response: {},
        message: "test"
    };
    return response;
}

router.get('/', function (req, res) {
    var response = prepareResponse(req);
    res.json(response);
});
module.exports = router;
