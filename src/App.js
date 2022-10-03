import Container from "./components/Container";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Container px="px-7">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
