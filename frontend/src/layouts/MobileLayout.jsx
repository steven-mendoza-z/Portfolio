import { Outlet } from "react-router-dom";
import Header from "./Header";
import Socials from "./Footer";
import Background from "./Background";

export default function Layout() {
  return (
    <>
      <Background/>

      <div className="layout gap30">
        <header className="mobile">
          <Header />
        </header>

        <main id="app-main" className="full-view flex column mobile">
          <Outlet />
        </main>

        <footer>
          <Socials/>
        </footer>
      </div>
    </>
  );
}
