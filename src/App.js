import Profile from "./components/pages/profile/Profile";
import { gql } from "@apollo/client";
import ResponsiveAppBar from "./components/Navbar/ResponsiveAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./store/userSlice";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function App({ client }) {
  const dispatch = useDispatch();
  useEffect(() => {
    client
      .query({
        query: gql`
          query GetMe {
            me {
              id
              firstName
              lastName
            }
          }
        `,
      })
      .then((result) => {
        dispatch(setUser(result.data));
      });
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: `#F76F72`,
        light: "#ffffff",
        contrastText: "#FFFFFF",
      },
      secondary: {
        light: "#ffffff",
        main: "#ffffff",
        contrastText: "#F76F72",
      },
    },
    typography: {
      h6: {
        color: "white",
      },
      button: {
        fontStyle: "none",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/404" element={<Error />} />
         <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Pricing />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/*" element={<Error />} /> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
