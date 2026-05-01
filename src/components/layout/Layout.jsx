import { Header } from "./Header";
import { Footer } from "./Footer";
import { RouteSeo } from "@/components/seo/RouteSeo";
import { ToastContainer } from "@/components/ui/ToastContainer";

export function Layout({ children }) {
  return (
    <div className="layout">
      <RouteSeo />
      <ToastContainer />
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
