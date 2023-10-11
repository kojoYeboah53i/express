const router = require('express').Router();

router.get('/hello', (req, res) => {

    res.send('Hello World');
});

router.get('/about', (req, res) => {

    res.send('we are in the about page');
});

router.post('/user', (req, res) => {

    if(req.body.username != '' || req.body.username != null){
        res.json({
            username: req.body.username,
           message : "success"
        });

    }
    
});

module.exports = router;
