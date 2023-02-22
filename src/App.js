import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useQuery, gql } from "@apollo/client";
import DisplayLocations from "./components/DisplayLocations";

function App() {
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Profile />
      {/* <DisplayLocations /> */}
    </div>
  );
}

export default App;
