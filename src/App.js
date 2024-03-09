import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MainNav from "./components/MainNav";
import About from "./components/pages/About";
import News from "./components/pages/News";
import Connect from "./components/pages/Connect";
import Contact from "./components/pages/Contact";
import Event from "./components/pages/Event";
import Ranking from "./components/pages/Ranking";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeaturedUpdate from "./components/pages/FeaturedUpdate";

function App() {
  return (
    <>
      <Router>
        <div className="bg-[#E9EAEC] bgr">
          <MainNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="featureupdate" element={<FeaturedUpdate />} />
            <Route path="connect" element={<Connect />} />
            <Route path="contact" element={<Contact />} />
            <Route path="events" element={<Event />} />
            <Route path="news" element={<News />} />
            <Route path="rankings" element={<Ranking />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
