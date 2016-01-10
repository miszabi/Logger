/**
 * Created by szabolcs.miskolczy on 4/6/2015.
 */
var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 3001,
    router = express.Router();

//test it using localhost:3001/api
router.get('/', function(req, res) {
    res.json({ appName:  'logger', version: '0.0.1', description: 'logger api' });
});

app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);
