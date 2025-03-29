const Drone = require("../models/Drone");

exports.getDrones = async (req, res) => {
  const drones = await Drone.find();
  res.json(drones);
};

// Update drone location (for real-time tracking)
exports.updateDroneLocation = async (req, res) => {
  const { droneId, lat, lng } = req.body;
  await Drone.findByIdAndUpdate(droneId, { location: { lat, lng } });
  res.json({ message: "Drone location updated" });
};
