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
import FeatureupdatePost from "./components/pages/FeatureupdatePost";
import RenderNews from "./components/RenderNews";
import ProgressBar from "./components/ProgressBar";
import JoinWBCAMTI from "./components/pages/JoinWBCAMTI";

function App() {
  return (
    <>
      <Router>
        <div className="bgr bg-[#E9EAEC]">
          <ProgressBar/>
          <MainNav />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="fupost" element={<FeatureupdatePost />} />
            <Route path="render" element={<RenderNews />} />
            <Route path="about" element={<About />} />
            <Route path="featureupdate" element={<FeaturedUpdate />} />
            <Route path="connect" element={<Connect />} />
            <Route path="contact" element={<Contact />} />
            <Route path="events" element={<Event />} />
            <Route path="news" element={<News />} />
            <Route path="rankings" element={<Ranking />} />
            <Route path="jnwbcamti" element={<JoinWBCAMTI />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
