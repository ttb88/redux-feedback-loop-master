// feedback.router.js
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// will receive new feedback item and insert into the applicable fields on "feedback" table in database
router.post('/', (req, res) => {
    console.log('task POST route was hit', req.body);
    pool.query(`INSERT INTO "feedback" (feeling, understanding, support, comments) VALUES ($1,$2, $3, $4);`, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments]).then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('errors with feedback insert', error);
        res.sendStatus(500);
    })
})

// will return all items from "feedback" table on database ordered ascending by "date"
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "feedback" ORDER BY "date" ASC;`)
        .then((result) => {
            feedback = result.rows;
            res.send(feedback);
        }).catch((error) => {
            console.log('errors with feedback select', error);
            res.sendStatus(500);
        })
})

// delete selected row on DOM from database
router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    pool.query(`DELETE FROM "feedback" WHERE "id" IN ($1);`, [req.params.id]).then(() => {
        res.sendStatus(204);
    }).catch((error) => {
        console.log('errors with feedback delete query', error);
        res.sendStatus(500);
    })
});


module.exports = router;