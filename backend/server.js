const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const groupRoutes = require('./routes/groupRoutes');
const noteRoutes = require('./routes/noteRoutes');

const app = express();

app.use(cors({
  origin: 'https://notes-application-sumit-kumars-projects-9e1bfe9b.vercel.app', // Vercel frontend domain
}));

app.use(bodyParser.json());

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/NotesApp';

mongoose.connect(dbURI) // The database is NotesApp and here database is connected to server.
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/groups', groupRoutes);
app.use('/api/notes', noteRoutes);

  
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
