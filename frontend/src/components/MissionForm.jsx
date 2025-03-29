import React, { useState } from "react";
import { createMission } from "../services/api";

const MissionForm = () => {
  const [mission, setMission] = useState({
    title: "",
    location: { lat: "", lng: "" },
    altitude: 100,
    waypoints: [],
    sensors: "",
    schedule: "",
    recurring: false,
  });

  const handleWaypointAdd = () => {
    setMission({
      ...mission,
      waypoints: [...mission.waypoints, { lat: "", lng: "" }],
    });
  };

  const handleWaypointChange = (index, field, value) => {
    const newWaypoints = [...mission.waypoints];
    newWaypoints[index][field] = value;
    setMission({ ...mission, waypoints: newWaypoints });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const missionData = {
      ...mission,
      sensors: mission.sensors.split(","), // Convert sensor list to an array
      location: {
        lat: parseFloat(mission.location.lat),
        lng: parseFloat(mission.location.lng),
      },
      waypoints: mission.waypoints.map((wp) => ({
        lat: parseFloat(wp.lat),
        lng: parseFloat(wp.lng),
      })),
    };

    await createMission(missionData);
    alert("Mission Created!");
    setMission({
      title: "",
      location: { lat: "", lng: "" },
      altitude: 100,
      waypoints: [],
      sensors: "",
      schedule: "",
      recurring: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-2">Create New Mission</h2>

      {/* Mission Title */}
      <input
        type="text"
        placeholder="Mission Title"
        value={mission.title}
        onChange={(e) => setMission({ ...mission, title: e.target.value })}
        className="border p-2 w-full mb-2"
        required
      />

      {/* Location Coordinates */}
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Latitude"
          value={mission.location.lat}
          onChange={(e) =>
            setMission({
              ...mission,
              location: { ...mission.location, lat: e.target.value },
            })
          }
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="number"
          placeholder="Longitude"
          value={mission.location.lng}
          onChange={(e) =>
            setMission({
              ...mission,
              location: { ...mission.location, lng: e.target.value },
            })
          }
          className="border p-2 w-full mb-2"
          required
        />
      </div>

      {/* Altitude */}
      <input
        type="number"
        placeholder="Altitude"
        value={mission.altitude}
        onChange={(e) => setMission({ ...mission, altitude: e.target.value })}
        className="border p-2 w-full mb-2"
        required
      />

      {/* Sensors */}
      <input
        type="text"
        placeholder="Sensors (comma-separated)"
        value={mission.sensors}
        onChange={(e) => setMission({ ...mission, sensors: e.target.value })}
        className="border p-2 w-full mb-2"
      />

      {/* Waypoints */}
      <h3 className="font-semibold mb-1">Waypoints</h3>
      {mission.waypoints.map((wp, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <input
            type="number"
            placeholder="Latitude"
            value={wp.lat}
            onChange={(e) => handleWaypointChange(index, "lat", e.target.value)}
            className="border p-2 w-full"
          />
          <input
            type="number"
            placeholder="Longitude"
            value={wp.lng}
            onChange={(e) => handleWaypointChange(index, "lng", e.target.value)}
            className="border p-2 w-full"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={handleWaypointAdd}
        className="bg-gray-500 text-white p-2 rounded mb-2"
      >
        Add Waypoint
      </button>

      {/* Schedule Date & Time */}
      <input
        type="datetime-local"
        value={mission.schedule}
        onChange={(e) => setMission({ ...mission, schedule: e.target.value })}
        className="border p-2 w-full mb-2"
        required
      />

      {/* Recurring Checkbox */}
      <div className="mb-2">
        <input
          type="checkbox"
          checked={mission.recurring}
          onChange={(e) =>
            setMission({ ...mission, recurring: e.target.checked })
          }
          className="mr-2"
        />
        <label>Recurring Mission</label>
      </div>

      {/* Submit Button */}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Create Mission
      </button>
    </form>
  );
};

export default MissionForm;
