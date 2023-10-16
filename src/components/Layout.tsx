import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import NavBarContextProvider from "../providers/NavBarContextProvider";
import SelectSortProvider from "../providers/SelectSortProvider";

const Layout = () => {
  return (
    <>
      <SelectSortProvider>
        <NavBarContextProvider>
          {" "}
          <NavBar />
          <Outlet></Outlet>
        </NavBarContextProvider>
      </SelectSortProvider>
    </>
  );
};

export default Layout;
