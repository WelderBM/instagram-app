import { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "./style/theme";
import { Screen, Flex, Typography, Button } from "./style";

import {NavBar} from "./components/Navbar";
import {Header} from "./components/Header";
import {Stories} from "./components/stories";
import {Publications} from "./components/Publications";
import { getPhotos } from "./services/photos";

import ReactLoading from 'react-loading';

const App = () => {

  const PHOTOS_PER_PAGE = 8

  const [theme, setTheme] = useState("light");
  const [photos, setPhotos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [photosPerPage, setPhotosPerPage] = useState(PHOTOS_PER_PAGE)

  const releaseLoading = () => setIsLoading(false)

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  async function fetchPhotos () {
    setIsLoading(true)
    const data = await getPhotos(photosPerPage, releaseLoading())
    setPhotos(data);
    console.log(data);
  }
  const handleSeeMore = () => {
    setPhotosPerPage(photosPerPage + PHOTOS_PER_PAGE)
  }
  useEffect(()=> fetchPhotos,[photosPerPage])

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Screen>
        <NavBar theme={theme} themeToggler={themeToggler}></NavBar>
        <Flex padding="0">
          <Header />
          <Stories photos={photos} />
          <Publications photos={photos}/>
          { isLoading ? 
          <ReactLoading type="spinningBubbles" color={theme.textPrimary} height="20px" width="20px" /> :
          <Button onClick={handleSeeMore}><Typography>Ver mais</Typography></Button>
          }
        </Flex>
      </Screen>
    </ThemeProvider>
  );
}

export default App;
