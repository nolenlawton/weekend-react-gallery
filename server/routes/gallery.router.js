const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `
          SELECT * FROM "galleryTable" ORDER BY ID;
      `;
  
    pool.query(sqlText)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  });

router.put('/:id', (req, res) => {
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

module.exports = router;