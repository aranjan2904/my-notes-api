const express = require('express');
const app = express();
const notesRouter = require('./routes/notes');

app.use(express.json()); // middleware to parse JSON

// Use notes router for /api/notes
app.use('/api/notes', notesRouter);

app.get('/', (req, res) => {
  res.send('🎉 Notes API is working!');
});

app.listen(3000, () => {
  console.log('🚀 Server is running at http://localhost:3000');
});
