const express = require("express");
const router = express.Router();
const moment = require('moment');

router.route('/')
.get(async (req, res, next) => {
    try {
    } catch (e) {
        console.log("To-do error:", e);
        res.status(400).send({error: e.message});
    }
});

router.route('/:id')
.get(async (req, res, next) => {
    //let params = req.query;
    try {
    } catch (e) {
        console.log("To-do error:", e);
        res.status(400).send({error: e.message});
    }
});


module.exports = router;