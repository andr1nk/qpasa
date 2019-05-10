import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true
});

const signup = (username, password) => {
  return service
    .post("/signup", { username, password })
    .then(response => {
      return response.data
    });

};

const login = (username, password) => {
  return service
    .post("/login", { username, password })
    .then(response => response.data);
};

const logout = () => {
  return service.post("/logout").then(response => response.data);
};

const loggedin = () => {
  return service.get("/loggedin").then(response => response.data);
};

export { signup, login, logout, loggedin };