import "./App.css";
import { createContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Homepage from "./components/Homepage";
import Lofi from "./components/Lofi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tabs from "./components/Tabs";
import Appcontext from "./context";

function App() {
 

  return (
    <Appcontext>
      <div className="App">
        <ChakraProvider >
          <Container maxW={"100%"} bg={"#EFEAD8"} padding={0}>
            <BrowserRouter>
              <Navbar />
              <Tabs />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Lofi" element={<Lofi />} />
              </Routes>
            </BrowserRouter>
            <Footer />
          </Container>
        </ChakraProvider>
      </div>
    </Appcontext>
  );
}

export default App;
