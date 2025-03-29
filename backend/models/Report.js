const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  missionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mission",
    required: true,
  },
  summary: String,
  duration: Number,
  distanceCovered: Number,
  coverageArea: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Report", reportSchema);
