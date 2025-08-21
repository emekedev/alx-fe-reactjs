import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost"; // for dynamic route

const App = () => {
  return (
    <Router>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/blog/1">Blog Post 1</Link>
      </nav>

      <Routes>
        <Route
               path="/profile/*"
             element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
              </ProtectedRoute>
                }
        />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Nested & Protected Profile route will go here later */}
        <Route path="/profile/*" element={<Profile />} />

        {/* Dynamic route example */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
};

export default App;
