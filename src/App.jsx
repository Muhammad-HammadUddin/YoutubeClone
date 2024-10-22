import styled, { ThemeProvider } from "styled-components";
import Menu from "./Comonents/Menu.jsx";
import Navbar from "./Comonents/Navbar.jsx";
import { darkTheme, lightTheme } from "./utils/utils.jsx"; // Import themes
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Fix import
import Home from "./pages/Home.jsx";
import Video from "./pages/Video.jsx";
import Signin from "./pages/Signin.jsx";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  background-color: ${({ theme }) => theme.bg};
  flex: 7;
`;

const Wrapper = styled.div`
padding:22px 96px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true); // State for dark mode toggle

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/"  >
                <Route index element={<Home />}/>
                <Route path="signin" element={<Signin />}/>
                </Route>

                <Route path="video"  >
                <Route path=":id" element={<Video />}/>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
