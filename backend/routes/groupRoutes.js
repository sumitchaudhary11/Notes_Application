const express = require('express');
const router = express.Router();
const Group = require('../models/Group');

// This get method takes the group name from mongodb database and Checks if group name already exists
router.get('/check', async (req, res) => {
  const { name } = req.query;
  
  try {
    const group = await Group.findOne({ name });
    if (group) {
      return res.json({ exists: true });
    }
    res.json({ exists: false });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// This port method Create a new group
router.post('/', async (req, res) => {
  const { name, color } = req.body;

  try {
    // Check if the group name already exists
    const existingGroup = await Group.findOne({ name });
    if (existingGroup) {
      return res.status(400).json({ error: 'Group name already exists' });
    }

    // Create and save the new group
    const newGroup = new Group({ name, color });
    await newGroup.save();
    res.json(newGroup);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get all groups and show in the UI by API
router.get('/', async (req, res) => {
  try {
    const groups = await Group.find();
    res.json(groups);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
