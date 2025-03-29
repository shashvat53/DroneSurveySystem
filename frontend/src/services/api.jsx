import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

export const fetchDrones = async () => {
  const response = await axios.get(`${API_BASE_URL}/drones`);
  return response.data;
};

export const fetchMissions = async () => {
  const response = await axios.get(`${API_BASE_URL}/missions`);
  return response.data;
};

export const createMission = async (missionData) => {
  const response = await axios.post(
    `${API_BASE_URL}/missions/create`,
    missionData
  );
  return response.data;
};

export const fetchReports = async () => {
  const response = await axios.get(`${API_BASE_URL}/reports`);
  return response.data;
};
