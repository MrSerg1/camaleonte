import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { Portfolio } from "@/pages/Portfolio";
import { Services } from "@/pages/Services";
// import { Ourgear } from "@/pages/Ourgear";
import { Contact } from "@/pages/Contact";
import { AboutUs } from "@/pages/AboutUs";
import { ROUTES } from "@/lib/routes";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.about} element={<AboutUs />} />
          <Route path={ROUTES.portfolio} element={<Portfolio />} />
          <Route path={ROUTES.services} element={<Services />} />
          <Route path={ROUTES.contact} element={<Contact />} />
          {/* <Route path="/equipo" element={<Ourgear />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
