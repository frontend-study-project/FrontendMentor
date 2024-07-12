import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return(
    <div className="min-h-dvh bg-dark-mode-900">
      <Header />
      <main className="w-[1280px] mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
