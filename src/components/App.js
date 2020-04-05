import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "../styles/Theme";
import InfoProtection from "../routes/InfoProtection";

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <>
          <GlobalStyles />
          <InfoProtection />
        </>
      </ThemeProvider>
    </>
  );
};

export default App;
