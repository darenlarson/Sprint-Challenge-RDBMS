const express = require('express');
const router = express.Router();
const db = require('../data/helpers/actionsHelper.js');;

// routes
router.get('/:id', (req, res) => {
    const id = req.params.id;

    db.getActions(id)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(err => {
            res.status(404).json({ error: "The action for the provided ID could not be found." });
        })

});

router.get('/', (req, res) => {
    db.getActions()
        .then(actions => {
            res.status(200).json(actions);
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

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    db.update(id, changes)
        .then(editedAction => {
            res.status(200).json(editedAction);
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    db.remove(id)
        .then(count => {
            res.status(200).json({ message: `${count} action has been removed`});
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;