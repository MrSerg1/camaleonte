import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { Portfolio } from "@/pages/Portfolio";
import { Services } from "@/pages/Services";
// import { Ourgear } from "@/pages/Ourgear";
import { Contact } from "@/pages/Contact";
import { AboutUs } from "@/pages/AboutUs";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/ourgear" element={<Ourgear />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
