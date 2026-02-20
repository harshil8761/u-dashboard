import React, { useState } from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="h-screen flex flex-col">
      <Navbar
        open={open}
        setOpen={setOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <div className="flex flex-1 overflow-hidden">
        <SideBar open={open} mobileOpen={mobileOpen} />
        <main className={`flex-1 bg-gray-50 p-6 overflow-y-auto min-w-0 transition-all duration-500 xl:${open ? "ml-60" : "ml-20"}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
