import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { Portfolio } from "@/pages/Portfolio";
import { Services } from "@/pages/Services";
import { Team } from "@/pages/Team";
import { Contact } from "@/pages/Contact";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
