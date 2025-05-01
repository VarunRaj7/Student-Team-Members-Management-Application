const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const upload = require('../config/multer');

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, rollNumber, year, degree, aboutProject, hobbies, certificate, internship, aboutYourAim } = req.body;
    console.log('POST /api/members - Received:', { body: req.body, file: req.file });

    if (!name || typeof name !== 'string' || name.trim() === '') {
      return res.status(400).json({ message: 'Name is required and must be a non-empty string' });
    }

    const member = new Member({
      name: name.trim(),
      rollNumber: rollNumber ? rollNumber.trim() : '',
      year: year ? year.trim() : '',
      degree: degree ? degree.trim() : '',
      aboutProject: aboutProject ? aboutProject.trim() : '',
      hobbies: hobbies ? hobbies.trim() : '',
      certificate: certificate ? certificate.trim() : '',
      internship: internship ? internship.trim() : '',
      aboutYourAim: aboutYourAim ? aboutYourAim.trim() : '',
      image: req.file ? req.file.filename : null,
    });

    await member.save();
    console.log('Member saved:', member);
    res.status(201).json(member);
  } catch (err) {
    console.error('POST /api/members - Error:', err);
    res.status(400).json({ message: err.message || 'Failed to create member' });
  }
});

router.get('/', async (req, res) => {
  try {
    const members = await Member.find();
    console.log('GET /api/members - Fetched:', members);
    res.json(members);
  } catch (err) {
    console.error('GET /api/members - Error:', err);
    res.status(500).json({ message: err.message || 'Failed to fetch members' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }
    console.log('GET /api/members/:id - Fetched:', member);
    res.json(member);
  } catch (err) {
    console.error('GET /api/members/:id - Error:', err);
    res.status(500).json({ message: err.message || 'Failed to fetch member' });
  }
});

module.exports = router;