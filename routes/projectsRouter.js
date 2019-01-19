const express = require('express');
const router = express.Router();
const db = require('../data/helpers/projectsHelper.js');

// routes
router.get('/:id', (req, res) => {
    const id = req.params.id;
    
    db.getProjects(id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({ error: "The project with the specified ID does not exist" })
        });
});

router.get('/', (req, res) => {
    db.getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    const projectInfo = req.body;

    db.insert(projectInfo)
        .then(newProject => {
            res.status(201).json(newProject);
        })
        .catch(err => {
            res.status(500).json({ error: "There was a problem. The project was not created." })
        })
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    db.update(id, changes)
        .then(editedProject => {
            res.status(200).json(editedProject);
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    db.remove(id)
        .then(count => {
            res.status(200).json({ message: `${count} project has been removed`});
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


module.exports = router;