import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import  CreateMusic  from "./pages/CreateMusic";
import  HomePage  from "./pages/HomePage";
import  Navbar  from "./components/Navbar";
import CreateManga from "./pages/CreateManga";
import CreateCards from "./pages/CreateCards";
import CreateVideoGame from "./pages/CreateVideoGame";

function App() {
  return (
    <Box minH={"100vh"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createMusic" element={<CreateMusic />} />
        <Route path="/createManga" element={<CreateManga />} />
        <Route path="/createTradingCards" element={<CreateCards />} />
        <Route path="/createVideoGame" element={<CreateVideoGame/>} />
      </Routes>
    </Box>
  );
}

export default App;
