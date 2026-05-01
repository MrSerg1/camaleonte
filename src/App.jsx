import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { LoadingScreen } from "@/components/ui/LoadingScreen.jsx";
import { ROUTES } from "@/lib/routes";

const Portfolio = lazy(() => import("@/pages/Portfolio.jsx").then((m) => ({ default: m.Portfolio })));
const Services = lazy(() => import("@/pages/Services.jsx").then((m) => ({ default: m.Services })));
const Contact = lazy(() => import("@/pages/Contact.jsx").then((m) => ({ default: m.Contact })));
const AboutUs = lazy(() => import("@/pages/AboutUs.jsx").then((m) => ({ default: m.AboutUs })));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.about} element={<AboutUs />} />
            <Route path={ROUTES.portfolio} element={<Portfolio />} />
            <Route path={ROUTES.services} element={<Services />} />
            <Route path={ROUTES.contact} element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
