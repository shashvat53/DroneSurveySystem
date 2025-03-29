const mongoose = require("mongoose");

const droneSchema = new mongoose.Schema({
  name: String,
  status: {
    type: String,
    enum: ["available", "in-mission", "charging"],
    default: "available",
  },
  batteryLevel: { type: Number, default: 100 },
  location: { lat: Number, lng: Number }, // For real-time tracking
});

module.exports = mongoose.model("Drone", droneSchema);
