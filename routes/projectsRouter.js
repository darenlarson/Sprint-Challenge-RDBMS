const express = require('express');

const router = express.Router();

// routes
router.get('/', (req, res) => {
    db('gtd')
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


module.exports = router;