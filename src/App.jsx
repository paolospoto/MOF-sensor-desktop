import React from "react";
import "@mantine/core/styles.css";

import { createTheme, MantineProvider } from "@mantine/core";

import MainScreen from "./MainScreen.jsx";

const theme = createTheme({
  // primaryColor: "main",
  // colors: {
  //   main: [
  //     "#effce8",
  //     "#e2f5d7",
  //     "#c5e8b1",
  //     "#a7db88",
  //     "#8dd165",
  //     "#7dca4e",
  //     "#73c642",
  //     "#61af33",
  //     "#549b2a",
  //     "#45861e",
  //   ],
  // },
});

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <MainScreen />
    </MantineProvider>
  );
}

export default App;
