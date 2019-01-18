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


module.exports = router;