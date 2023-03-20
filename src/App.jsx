import { useState } from "react";

import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "./style/theme";
import { Screen, Flex, Typography } from "./style";

import {NavBar} from "./components/navbar";
import {Header} from "./components/header";
import {Stories} from "./components/stories";
import {Publications} from "./components/publications";

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Screen>
        <NavBar theme={theme} themeToggler={themeToggler}></NavBar>
        <Flex padding="0">
          <Header />
          <Stories />
          <Publications/>
        </Flex>
      </Screen>
    </ThemeProvider>
  );
}

export default App;
