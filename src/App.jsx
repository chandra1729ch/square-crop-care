import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Testimonials from "./pages/Testimonials";
import ProductDetailPage from "./pages/ProductDetailPage";
import TopBar from "./components/TopBar";

function App() {
  return (
    <Router>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}
export default App;
