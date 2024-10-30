import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default MainLayout;
