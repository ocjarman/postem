import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import Home from "./components/views/Home";
import Profile from "./components/views/Profile";
import { AuthenticationGuard } from "./auth/AuthenticationGuard";
import { AdminPage } from "./components/AdminPage";
import { CallbackPage } from "./components/CallbackPage";
import { NotFound } from "./components/NotFound";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/profile"
          element={<AuthenticationGuard component={Profile} />}
        />
        <Route
          path="/admin"
          element={<AuthenticationGuard component={AdminPage} />}
        />
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
