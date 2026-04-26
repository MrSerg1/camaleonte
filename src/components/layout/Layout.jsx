import { Header } from "./Header";
import { Footer } from "./Footer";
import { RouteSeo } from "@/components/seo/RouteSeo";

export function Layout({ children }) {
  return (
    <div className="layout">
      <RouteSeo />
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
