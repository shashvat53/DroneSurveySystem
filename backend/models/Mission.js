const mongoose = require("mongoose");

const missionSchema = new mongoose.Schema({
  title: String,
  status: {
    type: String,
    enum: ["scheduled", "in-progress", "completed", "aborted"],
    default: "scheduled",
  },
  waypoints: [{ lat: Number, lng: Number }],
  altitude: Number,
  sensors: [String],
  startTime: Date,
  duration: Number,
  drone: { type: mongoose.Schema.Types.ObjectId, ref: "Drone" },
});

module.exports = mongoose.model("Mission", missionSchema);
