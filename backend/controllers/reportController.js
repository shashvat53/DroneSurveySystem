const Report = require("../models/Report");

exports.createReport = async (req, res) => {
  const report = new Report(req.body);
  await report.save();
  res.json({ message: "Report created", report });
};

exports.getReports = async (req, res) => {
  const reports = await Report.find().populate("missionId");
  res.json(reports);
};
