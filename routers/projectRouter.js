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

module.exports = router;