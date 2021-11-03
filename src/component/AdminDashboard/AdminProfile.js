import React from "react";
import { DashboardTemplate } from "../Dashboard/DashboardTemplate";
import { AdminDashboard } from "./AdminDashboard";

export const AdminProfile = () => {
  return (
    <div>
      <DashboardTemplate DashboardBody={<AdminDashboard />} />
    </div>
  );
};
