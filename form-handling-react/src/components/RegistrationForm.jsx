import React, { useState } from "react";

const RegistrationForm = () => {
  // Step 1: Set up states for controlled inputs
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState("");

  // Step 2: Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Step 3: Handle form submission with validation
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      setErrors("All fields are required!");
      return;
    }

    setErrors("");
    alert("Form submitted successfully ✅");
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Registration</h2>

      {errors && <p style={{ color: "red" }}>{errors}</p>}

      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter username"
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
