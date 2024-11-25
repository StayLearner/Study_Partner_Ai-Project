import React from "react";
import SideBar from "./_components/SideBar";
import DashboardHeader from "./_components/DashboardHeader";

/**
 * The `DashboardLayout` function is a React component that renders its children within a `div`
 * element.
 * @returns The `DashboardLayout` function is returning a `div` element with its children inside.
 */

function DashboardLayout({ children }) {
  return (
    <div>
      <div className="md:w-64 hidden md:block fixed">
        <SideBar />
      </div>
      <div className="md:ml-64">
        <DashboardHeader />

        <div className="p-10">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
