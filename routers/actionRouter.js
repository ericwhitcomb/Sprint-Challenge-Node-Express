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

module.exports = router;