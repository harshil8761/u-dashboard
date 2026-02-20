import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import { AiFillProduct } from "react-icons/ai";
import { BsCartCheckFill } from "react-icons/bs";
import { AuthContext } from '../../context/AuthContext';

const menu = [
  {name: "DashBoard",icon: MdDashboard,path:"dashboard"},
  {name: "Products",icon: AiFillProduct,path:"product"},
  {name: "Cart",icon: BsCartCheckFill,path:"cart"},
  {name: "Profile",icon: FaUser,path:"profile"},
]

const SideBar = ({open,mobileOpen}) => {
  const { logout } = useContext(AuthContext);

  return (
    <aside className={`fixed xl:static p-5 left-0 h-screen ${open ? "w-60" : "w-20"} bg-white shadow-lg z-40 overflow-y-auto transform transition-all duration-500 ease-in-out ${mobileOpen ? "translate-x-0": "-translate-x-full"} xl:translate-x-0`}>
      <nav className='space-y-3 '>
        {
          menu.map((item,index) => {
            const Icon = item.icon
            return (
              <Link to={item.path} key={index} className='flex items-center p-2  gap-2.5 hover:bg-gray-100 rounded-lg' >
                <Icon className='text-2xl shrink-0'  />
                <span className={`text-xl font-semiBold ${open ? "opacity-100" : "opacity-0"}`}>{item.name}</span>
              </Link>
            )
          })
        }
        <div onClick={logout} className='p-2 flex items-center gap-2.5 cursor-pointer hover:bg-red-100 rounded-lg'>
          <FaSignOutAlt className='text-2xl text-red-500 shrink-0' />
          <span className={`font-normal text-xl ${open ? "opacity-100" : "opacity-0"}`}>Logout</span>
        </div>
      </nav>
    </aside>
  )
}

export default SideBar
