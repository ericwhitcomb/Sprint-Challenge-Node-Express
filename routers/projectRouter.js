const express = require('express');
const router = express.Router();
const projectDb = require('../data/helpers/projectModel');

router.get('/', (req, res) => {
    projectDb.get()
        .then((projects) => {
            res.json(projects);
        })
        .catch((err) => {
            res.status(500).json({error: "Projects could not be retrieved."});
        });
});

router.get('/:id', (req, res) => {
    projectDb.get(req.params.id)
        .then((project) => {
            res.json(project);
        })
        .catch((err) => {
            res.status(500).json({error: "Project could not be retrieved."});
        });
});

router.post('/', (req, res) => {
    const project = req.body;
    if (project.name && project.description) {
        projectDb.insert(project)
            .then((project) => {
                res.status(201).json(project);
            })
            .catch((err) => {
                res.status(500).json({error: "Unable to create post."});
            });
    } else {
        res.status(400).json({errorMessage: "Please provide 'name' and 'description' for the project."});
    }
});

module.exports = router;