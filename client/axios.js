import axios from "axios";

const herokuLink = "https://web-production-81bd.up.railway.app/api";
const localLink = "http://localhost:8000/api";

const axiosConfig = {
  baseURL: herokuLink,
  timeout: 30000,
};
export const Api = axios.create(axiosConfig);
