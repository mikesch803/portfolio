import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import { Blogs, Home, Projects } from "./pages";
import { Header } from "./components";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
