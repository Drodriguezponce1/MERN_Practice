import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import  CreatePage  from "./pages/CreatePage";
import  HomePage  from "./pages/HomePage";
import  Navbar  from "./components/Navbar";
import CreateManga from "./pages/CreateManga";
import CreateCards from "./pages/CreateCards";

function App() {
  return (
    <Box minH={"100vh"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/createManga" element={<CreateManga />} />
        <Route path="/createTradingCards" element={<CreateCards />} />
        <Route path="/createManga" element={<CreateManga />} />
      </Routes>
    </Box>
  );
}

export default App;
