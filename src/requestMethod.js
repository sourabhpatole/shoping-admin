import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmFmMjljZWIyMmRiNjJiMmNmMmQ5ZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzAyNDQ3MywiZXhwIjoxNjQ3MjgzNjczfQ.t9fpeEYaWNAurTLCpKeqKWf64jDcztp4RDvMs4Nh0mM";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Barer ${TOKEN}` },
});
