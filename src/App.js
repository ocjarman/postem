import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Home from "./components/views/Home";
import Profile from "./components/views/Profile";
import ExternalApi from "./components/views/ExternalApi";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/external-api" element={<ExternalApi />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
