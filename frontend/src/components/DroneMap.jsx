import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { fetchDrones } from "../services/api";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const DroneMap = () => {
  const [drones, setDrones] = useState([]);

  useEffect(() => {
    fetchDrones().then(setDrones);

    socket.on("droneLocationUpdate", (updatedDrone) => {
      setDrones((prevDrones) =>
        prevDrones.map((drone) =>
          drone._id === updatedDrone._id ? updatedDrone : drone
        )
      );
    });

    return () => socket.off("droneLocationUpdate");
  }, []);

  return (
    <MapContainer
      center={[20, 78]}
      zoom={5}
      style={{ height: "500px" }}
      className="rounded-lg"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {drones.map((drone) => (
        <Marker
          key={drone._id}
          position={[drone.location.lat, drone.location.lng]}
        >
          <Popup>
            <p>{drone.name}</p>
            <p>Status: {drone.status}</p>
            <p>Battery: {drone.batteryLevel}%</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default DroneMap;
