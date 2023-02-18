const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE
router.put('/like/:id', (req, res) => {
    let id = req.params.id;
    let change = !req.body.isLiked
    let likes = req.body.likes

    if (change === true){
      likes++
    }
    else {
      likes--
    }

    const sqlText = `UPDATE "galleryTable" SET "isLiked"= $1, "likes" = $2 WHERE id= $3;`;
    const sqlParams = [change, likes, id]

    pool.query(sqlText, sqlParams)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error('Error in PUT router', err);
      res.sendStatus(501);
    });
});

router.get('/gallery', (req, res) => {
    const sqlText = `SELECT * FROM "galleryTable" ORDER BY ID;`;
  
    pool.query(sqlText)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  });

router.put('/gallery/:id', (req, res) => {
    let change = !req.body.image

    const sqlText = `UPDATE "galleryTable" SET "image"= $1 WHERE id= $2;`;
    const sqlParams = [change, req.params.id];
  
    pool.query(sqlText, sqlParams)
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.error('Error in PUT router', err);
        res.sendStatus(501);
      });
  });

router.post('/newPhoto', (req, res) => {
    const newItem = req.body;

    const sqlText = `
    INSERT INTO "galleryTable" ("path", "description")
    VALUES ($1, $2);
    `;
    const sqlParams = [newItem.path, newItem.description]

    pool.query(sqlText, sqlParams)
      .then((result) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.error('Error in router POST', err);
        res.sendStatus(501);
      });
  });

module.exports = router;