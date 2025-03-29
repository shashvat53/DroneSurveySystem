const express = require("express");
const { createReport, getReports } = require("../controllers/reportController");
const {
  getDrones,
  updateDroneLocation,
} = require("../controllers/droneController");
const {
  createMission,
  getMissions,
} = require("../controllers/missionController");

const router = express.Router();

// for Drone
router.get("/", getDrones);
router.post("/update-location", updateDroneLocation);

// for Mission
router.post("/create", createMission);
router.get("/", getMissions);

// for Report
router.post("/create", createReport);
router.get("/", getReports);

module.exports = router;
