import React from "react";
import DashboardLayout from "../../../components/layouts/DashboardLayout";

const AdminPage = () => {
  return (
    <div>
      <h1>Admin Page</h1>
    </div>
  );
};

export default AdminPage;

AdminPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
