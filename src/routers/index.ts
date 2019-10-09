import express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send({ message: "Hello WebApp" });
})

export default router;