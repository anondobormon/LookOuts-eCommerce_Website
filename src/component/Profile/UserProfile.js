import React from "react";
import { DashboardTemplate } from "../Dashboard/DashboardTemplate";
import { DashboardBody } from "./DashboardBody";

export const UserProfile = () => {
  return (
    <div>
      <DashboardTemplate DashboardBody={<DashboardBody />} />
    </div>
  );
};
