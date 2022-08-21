import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {ChakraProvider, Container} from "@chakra-ui/react";
import Homepage from "./components/Homepage";
import Meditate from "./components/Meditate";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Tabs from "./components/Tabs";

function App() {

  return (
    <div className="App">
      <ChakraProvider>
      <Container maxW={"100%"} bg={"#EFEAD8"} padding={0}>
          <BrowserRouter >
            <Navbar />
            <Tabs />
            <Routes>
              <Route path="/" element={<Homepage />}/>
              <Route path="/Meditate" element={<Meditate />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </Container>
      </ChakraProvider>
    </div>
  );
}

export default App;
