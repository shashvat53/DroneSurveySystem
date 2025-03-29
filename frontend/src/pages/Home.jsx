import React from "react";
import DroneMap from "../components/DroneMap";
import MissionForm from "../components/MissionForm";
import ReportList from "../components/ReportList";

const Home = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">
        Drone Survey Management
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        <MissionForm />
        <ReportList />
      </div>
      <div className="mt-6">
        <DroneMap />
      </div>
    </div>
  );
};

export default Home;
