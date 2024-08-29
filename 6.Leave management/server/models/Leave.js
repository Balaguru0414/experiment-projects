const mongoose = require("mongoose");

const LeaveSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  leaveType: {
    type: String,
    required: true,
  },
  leaveDays: {
    type: Number,
    required: true,
  },
  appliedDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Leave", LeaveSchema);
