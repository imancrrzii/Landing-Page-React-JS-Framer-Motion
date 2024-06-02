import Navbar from "./components/navbar";
import './App.css'
import Jumbotron from "./components/Jumbotron";
import Features from "./components/Features";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Newsletter from "./components/Newsletter";
import Footer from "./shared/Footer";

export default function App() {
  return (
    <>
      <Navbar/>
      <Jumbotron/>
      <Features/>
      <About/>
      <Pricing/>
      <Newsletter/>
      <Footer/>
    </>
  );
}
