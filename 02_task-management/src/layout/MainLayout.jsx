import React from "react";
import { Outlet } from "react-router";
import Navbar from "../componets/Navbar";
import Header from "../componets/Header";

const MainLayout = () => {
  return (
    <div className="flex">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 h-screen w-64 z-20">
        <Navbar />
      </div>

      {/* Main Content Area */}
      <div className="ml-64 flex-1 flex flex-col">
        {/* Fixed Header */}
        <div className="fixed top-0 left-64 right-0 z-10">
          <Header />
        </div>

        {/* Scrollable Content */}
        <main className="mt-16 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;