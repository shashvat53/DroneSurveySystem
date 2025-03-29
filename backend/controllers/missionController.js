const Mission = require("../models/Mission");

exports.createMission = async (req, res) => {
  const mission = new Mission(req.body);
  await mission.save();
  res.json({ message: "Mission created", mission });
};

exports.getMissions = async (req, res) => {
  const missions = await Mission.find().populate("drone");
  res.json(missions);
};
