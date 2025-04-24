import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./BlogPost";
import BlogPost from "./BlogList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/post/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App
