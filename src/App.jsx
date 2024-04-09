import React from "react";
import "@mantine/core/styles.css";

import { Center, createTheme, MantineProvider } from "@mantine/core";
import { useState } from "react";

const theme = createTheme({
  primaryColor: "main",
  colors: {
    main: [
      "#effce8",
      "#e2f5d7",
      "#c5e8b1",
      "#a7db88",
      "#8dd165",
      "#7dca4e",
      "#73c642",
      "#61af33",
      "#549b2a",
      "#45861e",
    ],
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Center w={"100%"} h={"100vh"} pb={"xl"}>
        <p>MOF</p>
      </Center>
    </MantineProvider>
  );
}

export default App;
