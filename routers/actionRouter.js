const express = require('express');
const router = express.Router();
const actionDb = require('../data/helpers/actionModel');

router.get('/', (req, res) => {
    actionDb.get()
        .then((actions) => {
            res.json(actions);
        })
        .catch((err) => {
            res.status(500).json({error: "Actions could not be retrieved."});
        });
});

router.get('/:id', (req, res) => {
    actionDb.get(req.params.id)
        .then((action) => {
            res.json(action);
        })
        .catch((err) => {
            res.status(500).json({error: "Action could not be retrieved."});
        });
});

router.post('/', (req, res) => {
    const action = req.body;
    if (action.description && action.notes && action.project_id) {
        actionDb.insert(action)
            .then((action) => {
                res.status(201).json(action);
            })
            .catch((err) => {
                res.status(500).json({error: "Unable to create action."});
            });
    } else {
        res.status(400).json({errorMessage: "Please provide 'description', 'notes', and 'project_id' for the action."});
    }
});

module.exports = router;