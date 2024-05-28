import "./App.css";
import Header from "./Header";
import Navbar from "./components/Navbar";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Hero from "./Hero";
import Cards from "./Cards";

function App() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <MainContent>
        <Hero />
        <Cards />
      </MainContent>
      <Footer />
    </>
  );
}

export default App;
