import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {ChakraProvider} from "@chakra-ui/react";
import Homepage from "./components/Homepage";
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Navbar />
        <Homepage />
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
