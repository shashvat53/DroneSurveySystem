import React, { useEffect, useState } from "react";
import { fetchReports } from "../services/api";

const ReportList = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports().then(setReports);
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-2">Survey Reports</h2>
      {reports.map((report) => (
        <div key={report._id} className="p-2 border-b">
          <p>
            <strong>Mission:</strong> {report.missionId.title}
          </p>
          <p>
            <strong>Summary:</strong> {report.summary}
          </p>
          <p>
            <strong>Duration:</strong> {report.duration} mins
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReportList;
