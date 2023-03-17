import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";
import { Screen, Flex, Typography } from "./style";
import { NavBar } from "./components";
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Screen>
        <NavBar></NavBar>
      </Screen>
    </ThemeProvider>
  );
}

export default App;
