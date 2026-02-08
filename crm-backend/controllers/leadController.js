const db = require("../config/db");

// CREATE a new lead
exports.createLead = (req, res) => {
  const { name, email, phone, source } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and Email are required" });
  }

  const sql =
    "INSERT INTO leads (name, email, phone, source) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, phone, source], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "Lead created successfully" });
  });
};

// GET all leads
exports.getLeads = (req, res) => {
  const sql = "SELECT * FROM leads ORDER BY created_at DESC";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// UPDATE lead status & notes
exports.updateLead = (req, res) => {
  const { status, notes } = req.body;
  const { id } = req.params;

  const sql =
    "UPDATE leads SET status = ?, notes = ? WHERE id = ?";

  db.query(sql, [status, notes, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Lead updated successfully" });
  });
};
