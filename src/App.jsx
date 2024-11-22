import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";




// Import pages
import About from "./pages/About";
import CheckOut from "./pages/CheckOut";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import FAQs from "./pages/FAQs";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Shop from "./pages/Shop";
import Wishlist from "./pages/Wishlist";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Blog from "./pages/Blog";
import History from "./pages/History";
import Terms from "./pages/Terms";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
