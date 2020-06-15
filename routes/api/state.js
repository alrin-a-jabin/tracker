const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');
const validator=require('validator');
const State = require('../../models/State');


// @route    POST api/state
// @desc     insert state detail
// @access   private
router.post(
  '/insert',
  [
    check('stateName', 'stateName is required').not().isEmpty(),
    check('infected', 'infected is required').not().isEmpty(),
    check('recovered', 'Please enter the  recovered').not().isEmpty(),
    check('deaths', 'deaths is required').not().isEmpty()
  ], 
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { stateName, infected, recovered, deaths } = req.body;
    try {
      let newState = new State({
        stateName,
        infected,
        recovered,
        deaths
      });
      const state= await newState.save();
      res.json(state);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
}
);

//update state by id
router.put('/:stateId',
[
  check('stateName', 'stateName is required').not().isEmpty(),
  check('infected', 'infected is required').not().isEmpty(),
  check('recovered', 'Please enter the  recovered').not().isEmpty(),
  check('deaths', 'deaths is required').not().isEmpty(),
],
 async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const stateId = req.params.stateId;
  const { stateName, infected, recovered, deaths } = req.body;
  try {
    const state = await State.findById(stateId);
    if (!state) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'could not find any match ' }] });
    }
    state.stateName = stateName;
    state.infected = infected;
    state.recovered = recovered;
    state.deaths=deaths;
    const result = await state.save();
    res.json(result);
  } catch (err) {
    // console.error(err.message);
    res.status(500).send('Server error');
  }
});


router.delete('/:stateId',  async (req, res) => {
  const stateId=req.param.id;
  try {
    // Remove state
    await State.findOneAndRemove(stateId);
    res.json({ msg: 'Deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.get('/', async (req, res) => {
  // const escpQuery = Object.assign({}, ...Object.keys(req.query).map(obKey => {
  //   return {[obKey]: validator.escape(req.query[obKey])}
  // }))
  // const filter = escpQuery.filter || ''
  // const filterQuery = {
  //   stateName: new RegExp(filter, 'i')
  // }
  try {
    // const state = await State.find(filterQuery);
    const state = await State.find();
    res.json(state);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
