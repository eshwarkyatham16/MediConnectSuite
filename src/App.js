import "./App.css";
import "@fontsource/roboto/300.css"; // Import Roboto font weights
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import PersistentDrawerLeft from "./pages/Header.js"; // Import the new combined component
import { ThemeProvider, createTheme } from "@mui/material/styles"; // Add MUI ThemeProvider if necessary

function App() {
  // You can also customize your theme settings here if needed
  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#556cd6",
  //     },
  //     secondary: {
  //       main: "#19857b",
  //     },
  //   },
  // });

  return (
    // <ThemeProvider theme={theme}>
    <div className="App">
      <PersistentDrawerLeft />
    </div>
    // </ThemeProvider>
  );
}

export default App;
