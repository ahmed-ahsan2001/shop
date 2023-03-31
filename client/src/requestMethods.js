import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGQ2N2IxZjhhZGM2ZDAzMzJkZDQwOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODkwMzIzOCwiZXhwIjoxNjc5MTYyNDM4fQ.57aE53WpzodixcZB6sk10Lfb1xooaRs-o89gZgQo9mw";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN} ` },
});
