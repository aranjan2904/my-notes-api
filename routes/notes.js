/**
 * Express router for handling notes-related routes.
 * 
 * @module routes/notes
 */

 /**
    * GET /
    * Reads all notes from the notes.json file and returns them as JSON.
    * 
    * @name GET/
    * @function
    * @memberof module:routes/notes
    * @param {Object} req - Express request object
    * @param {Object} res - Express response object
    * 
    * Reads the notes.json file asynchronously.
    * If an error occurs while reading, responds with a 500 status and error message.
    * If successful, parses the file content as JSON and sends it as the response.
    */
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path'); // Add this line

//get all notes

router.get('/', (req, res) => {
    const notesPath = path.join(__dirname, '../notes.json'); // Use correct path
    fs.readFile(notesPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({message: 'Error reading notes data'});
        }

        const notes = JSON.parse(data);
        res.json(notes);
    });

});

module.exports = router;
