const express = require('express');
const router = express.Router();
const db = require('../data/helpers/actionsHelper.js');;

// routes
router.get('/', (req, res) => {
    db.getActions()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    const actionInfo = req.body;

    db.insert(actionInfo)
        .then(newAction => {
            res.status(201).json(newAction);
        })
        .catch(err => {
            res.status(400).json({ error: "There was a problem. The action was not created. Please try again." });
        })
});

module.exports = router;