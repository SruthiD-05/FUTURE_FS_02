const express = require("express");
const router = express.Router();
const {
  createLead,
  getLeads,
  updateLead,
} = require("../controllers/leadController");

const auth = require("../middleware/authMiddleware");

router.post("/", auth, createLead);
router.get("/", auth, getLeads);
router.put("/:id", auth, updateLead);

module.exports = router;
