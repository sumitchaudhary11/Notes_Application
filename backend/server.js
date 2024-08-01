const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const groupRoutes = require('./routes/groupRoutes');
const noteRoutes = require('./routes/noteRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/NotesApp') // The database is NotesApp and here database is connected to server.
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/groups', groupRoutes);
app.use('/api/notes', noteRoutes);

  
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
