const Food = require("../models/food");
const { Router } = require("express");
const router = Router();


//index route
router.get("/", async (req, res) => {
  res.json(await Food.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Food.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(await Food.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Food.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
