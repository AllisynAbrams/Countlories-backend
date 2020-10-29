const { Router } = require("express");
const router = Router();
const Food = require('../models/food');


//Index route - get all foods
router.get("/", async (req, res) => {
  res.json(await Food.find({}));
});

//Create route - create a new food *(not using at the moment - being added through related models via route in day controller)
router.post("/", async (req, res) => {
  res.json(await Food.create(req.body));
});

//Update route  - edit individual food by id *(not using at the moment - being edited through related models via route in day controller)
router.put("/:id", async (req, res) => {
  res.json(await Food.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//Delete route - delete an individual food 
router.delete("/:id", async (req, res) => {
  res.json(await Food.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
