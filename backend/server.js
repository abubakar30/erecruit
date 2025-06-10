const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// File Upload Setup
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') cb(null, true);
    else cb(new Error('Only PDFs allowed'));
  }
});

// Submit Form
app.post('/submit', upload.single('resume'), (req, res) => {
  const {
    fullName, address, qualification,
    result, jobPosition, yearsExperience
  } = req.body;

  const resumePath = req.file ? req.file.path : null;

  const sql = `INSERT INTO applications (full_name, address, qualification, result, job_position, years_experience, resume_path)
               VALUES (?, ?, ?, ?, ?, ?, ?)`;
  db.query(sql, [fullName, address, qualification, result, jobPosition, yearsExperience, resumePath],
    (err, result) => {
      if (err)
        {
          console.error('Database error:', err);
          return res.status(500).send(err);
        }
      res.json({ success: true });
    });
});

//API for List of Applications
const applicationRoutes = require("./routes/applications");
app.use("/api/applications", applicationRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));