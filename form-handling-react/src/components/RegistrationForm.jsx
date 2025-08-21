import React, { useState } from "react";

const RegistrationForm = () => {
  // Separate states for each field
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password) {
      setErrors("All fields are required!");
      return;
    }

    setErrors("");
    alert("Form submitted successfully ✅");
    console.log({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Registration</h2>

      {errors && <p style={{ color: "red" }}>{errors}</p>}

      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
