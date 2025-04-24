import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/css/main.css'
import NaviBar from "./components/NaviBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import BlogList from "./BlogList";
import BlogPost from "./BlogPost";

function App() {
  return (
    <Router>
      <Hero />
      <div className="inner">
        <NaviBar />
      </div>

      <main id="main">
        <div className="inner">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/post/:slug" element={<BlogPost />} />
          </Routes>
        </div>
      </main>
      
      <Footer />
    </Router>
  )
}

export default App
