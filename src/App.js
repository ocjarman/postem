import "./App.css";
import Profile from "./components/Profile";
import { gql } from "@apollo/client";
import ResponsiveAppBar from "./components/Navbar/ResponsiveAppBar";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

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

  const theme = createTheme({
    palette: {
      primary: {
        main: `#F76F72`,
        light: "#ffffff",
      },
      secondary: {
        light: "#ffffff",
        main: "#ffffff",
        // dark: will be calculated from palette.secondary.main,
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
      <div className="App">
        <ResponsiveAppBar />
        <Profile />
      </div>
    </ThemeProvider>
  );
}

export default App;
