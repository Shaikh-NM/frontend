import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/login", value);
      const { error, message } = response.data;
      if (error) {
        console.log(error);
      } else {
        console.log(message);
      }
    } catch (error) {
      // const { data } = error;
      console.log("Login Error", error.response.data.error);
    }
    setValue({ username: "", password: "" });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Enter your username...."
          value={value.username}
          required
          onChange={handleLoginChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter your password...."
          value={value.password}
          required
          onChange={handleLoginChange}
        />
        <button type="submit">Login</button>
        <p>
          Not yet Registered ? <Link to="/register">Register Now!!!</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
