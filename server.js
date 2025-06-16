const express = require('express');
const app = express();
const notesRouter = require('./routes/notes');

app.use(express.json());

// All routes starting with /api/notes go to notesRouter
app.use('/api/notes', notesRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000');
});
