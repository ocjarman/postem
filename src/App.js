import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { gql } from "@apollo/client";
import ResponsiveAppBar from "./components/Navbar/ResponsiveAppBar";

function App({ client }) {
  client
    .query({
      query: gql`
        query GetMe {
          me {
            id
          }
        }
      `,
    })
    .then((result) => console.log(result));

  return (
    <div className="App">
      <ResponsiveAppBar />
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
