const express = require("express");
const Leave = require("../models/Leave");

const router = express.Router();

// Apply for Leave
router.post("/apply", async (req, res) => {
  const { email, leaveType, leaveDays } = req.body;

  try {
    const leave = new Leave({
      email,
      leaveType,
      leaveDays,
    });

    const savedLeave = await leave.save();

    res.status(201).json({
      message: "Leave applied successfully",
      leave: {
        id: savedLeave._id,
        email: savedLeave.email,
        leaveType: savedLeave.leaveType,
        leaveDays: savedLeave.leaveDays,
        appliedDate: savedLeave.appliedDate,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

router.get("/", async (req, res) => {
  const { email } = req.query;

  try {
    const leaves = await Leave.find({ email });

    if (!leaves.length) {
      return res.status(404).json({ message: "No leaves found for this user" });
    }

    res.status(200).json(leaves);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;
