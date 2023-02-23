import Profile from "./components/Profile";
import { gql } from "@apollo/client";
import ResponsiveAppBar from "./components/Navbar/ResponsiveAppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./store/userSlice";
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

  // custom components?
  // const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  //   color: theme.status.danger,
  //   '&.Mui-checked': {
  //     color: theme.status.danger,
  //   },
  // }));

  return (
    <ThemeProvider theme={theme}>
      {/* <div className="App"> */}
      <ResponsiveAppBar />
      <Profile />
      {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
