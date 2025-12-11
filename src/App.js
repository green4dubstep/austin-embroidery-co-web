import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Embroidery from "./pages/Embroidery";
import ScreenPrinting from "./pages/ScreenPrinting";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/embroidery" element={<Embroidery />} />
        <Route path="/screen-printing" element={<ScreenPrinting />} />
        <Route path="/our-work" element={<OurWork />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
