import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import Button from "../common/Button";
import { AuthContext } from "../../context/AuthContext";

const Navbar = ({open,setOpen,mobileOpen,setMobileOpen}) => {
  const { user,logout } = useContext(AuthContext);
  
  return (
    <nav className="bg-white shadow flex justify-between items-center px-6 py-3  sticky top-0  left-0 right-0 z-50">
      <FaBars className="block xl:hidden text-xl cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)} />
      <div className="w-60">
        <h2 className="hidden md:block text-center font-semibold">E-Shop</h2>
      </div>
      <div className="flex flex-1 xl:justify-between justify-end items-center">
        <FaBars className="hidden xl:block text-xl cursor-pointer" onClick={() => setOpen(!open)} />
        <div className="flex items-center gap-2.5">
          <div>Hello,{user.username}</div>
          <Button title="Logout" onClick={logout} className="hidden lg:block bg-red-500 hover:bg-red-600 text-white font-normal px-4 py-1 rounded cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
