// routes/noteRoutes.js
const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Create a new note
router.post('/', async (req, res) => {
  const { content, groupId } = req.body;
  try {
    const newNote = new Note({
      content,
      groupId,
      createdAt: new Date()
    });
    await newNote.save();
    res.json(newNote);
  } catch (err) {
    res.status(500).send('Server error');
  }
});


// Route to get notes by groupId
router.get('/:groupId', async (req, res) => {
  try {
    const notes = await Note.find({ groupId: req.params.groupId });
    res.json(notes);
  } catch (err) {
    console.log("error");
    res.status(500).send('Server error');
  }
});

module.exports = router;
