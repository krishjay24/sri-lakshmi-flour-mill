import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer, ScrollTools } from './site/Layout';
import Home from './site/Home';
import About from './site/About';
import Products from './site/Products';
import Services from './site/Services';
import Contact from './site/Contact';
import { Privacy, NotFound } from './site/OtherPages';
import './site/site.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app" id="top">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <div id="main-content"><Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes></div>
        <Footer />
        <ScrollTools />
      </div>
    </BrowserRouter>
  );
}

export default App;
