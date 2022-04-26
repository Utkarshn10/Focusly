import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {ChakraProvider} from "@chakra-ui/react";
import Homepage from "./components/Homepage";
import Meditate from "./components/Meditate";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Meditate" element={<Meditate />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
