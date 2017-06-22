'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const tracking = require('./lib/tracking');
const answers = require('./lib/answers');
const restService = express();

restService.use(bodyParser.urlencoded({extended: true}));
restService.use(bodyParser.json());


restService.post('/hermestracking', function(req, res) {
    var googleReq = req.body.result.parameters.barcode.replace(/[^0-9.]/g, "");
    console.log(googleReq);

    var hermesRes = tracking.getTracking(googleReq, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var latest = JSON.parse(body)[0];
            console.log(latest.point.description + ' is the state of your parcel');
            var hermesRes = answers.buildAnswerSentence(latest);

            if(hermesRes != ''){
                var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.barcode ? hermesRes : "I didn't get it rigth, please Speak again."
                return res.json({speech: speech, displayText: speech, source: 'gHomeHermesTrackingAPI'});
            }
        }
    });
});


restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
