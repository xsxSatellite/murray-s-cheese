import { Outlet } from "react-router-dom";
import { IconContext } from "@phosphor-icons/react";
import { Toaster } from "react-hot-toast";
import Header from "./Header";
import Footer from "./Footer";

export default function HeaderFooter() {
  return (
    <IconContext.Provider value={{ size: 24 }}>
      <Header />
      <Outlet />
      <Footer />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            color: "black",
          },
          success: {
            duration: 3000,
            style: {
              backgroundColor: "#d3f9d8",
            },
          },
        }}
      />
    </IconContext.Provider>
  );
}
