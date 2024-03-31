import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/register", data);
      const { message } = response.data;
      console.log(message);
    } catch (err) {
      const { error } = err.response.data;
      console.log(error);
    }
    setData({
      username: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={data.username}
          placeholder="Enter the username...."
          required
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          value={data.password}
          placeholder="Enter the password...."
          required
          onChange={handleChange}
        />
        <button type="submit">Register</button>
        <p>
          Already registered ? <Link to="/login">Login Now!!!</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
