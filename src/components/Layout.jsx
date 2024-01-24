import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
//import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}