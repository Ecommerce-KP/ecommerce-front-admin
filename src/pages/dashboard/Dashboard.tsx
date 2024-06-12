import AdminLayout from "../../components/layouts";
import Main from '../../components/layouts/main/Main';
import React from "react";

const DashboardPage = () => {
  return (
    <AdminLayout page="Dashboard">
      <Main />
    </AdminLayout>
  );
};

export default DashboardPage;
