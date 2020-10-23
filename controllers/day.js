const Day = require("../models/day");
const Food = require('../models/food');
const { Router } = require("express");
const router = Router();

// SEED ROUTE
router.get('/seed', (req, res) => {
	const seedDay = [
		{ date: 'Monday' },
		{ date: 'Tuesday' },
		{ date: 'Wednesday' },
		{ date: 'Thursday' },
		{ date: 'Friday' },
		{ date: 'Saturday' },
		{ date: 'Sunday' },
	];
	Day.create(seedDay, (err, data) => {
		res.json(data);
	});
});

router.get('/', async (req,res) => {
    const day = await Day.find({}).populate('food')
    res.json({status: 200, data: day})
})

router.post('/', async (req, res) => {
    const day = await Day.create(req.body)
    res.json({ status: 200, data: day})
})

router.put("/:id", async (req, res)=>{
    res.json(await Day.findByIdAndUpdate(req.params.id, req.body, {new: true}))
})


router.put('/:dayId/addFood/:foodId', async (req, res)=>{
    console.log('day - put', req.params)
    const food = await Food.findById(req.params.foodId)
    const day = await Day.findByIdAndUpdate(
        req.params.dayId,
        {$push: {food: food.id}, new: true}
    )
    res.json({status: 200, data:day})
})


router.delete("/:id", async (req, res) => {
    res.json(await Day.findByIdAndRemove(req.params.id));
  });

module.exports = router