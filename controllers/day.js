const Day = require('../models/day')
const Food = require('../models/food')
const { Router } = require('express')
const router = Router()

// SEED ROUTE
router.get('/seed', (req, res) => {
	const seedDay = [
		{ day: 'Monday' },
		{ day: 'Tuesday' },
		{ day: 'Wednesday' },
		{ day: 'Thursday' },
		{ day: 'Friday' },
		{ day: 'Saturday' },
		{ day: 'Sunday' },
	]
	Day.create(seedDay, (err, data) => {
		res.json(data)
	})
})

// Index - get all days and populate food within each day
router.get('/', async (req, res) => {
	const day = await Day.find({}).populate('food')
	res.json({ status: 200, data: day })
})

// Create - add food to a specific day
router.post('/:dayId', async (req, res) => {
	const food = await Food.create(req.body)
	const day = await Day.findById(req.params.dayId)
	day.food.push(food._id)
	day.save()
	res.json(food)
})

// Create - create a new individual day *(not used at the moment)
router.post('/', async (req, res) => {
	const day = await Day.create(req.body)
	res.json({ status: 200, data: day })
})

// Update - edit the date (through select date button on front end)
router.put('/:id', async (req, res) => {
	res.json(await Day.findByIdAndUpdate(req.params.id, req.body, { new: true }))
})

// Delete - delete an individual day by id *(not used at the moment)
router.delete('/:id', async (req, res) => {
	res.json(await Day.findByIdAndRemove(req.params.id))
})

// Delete - delete all days
router.delete('/', async (req,res) => {
	res.json(await Day.deleteMany({}))
})

module.exports = router
