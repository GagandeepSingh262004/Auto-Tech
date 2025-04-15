import { Outlet } from "react-router-dom";

const Admin = () => {
  console.log("JS");
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
