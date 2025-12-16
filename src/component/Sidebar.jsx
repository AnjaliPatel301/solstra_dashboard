import { FaUserGroup } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { PiSquaresFourThin } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { GoProjectSymlink } from "react-icons/go";
import { FaPager } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

import { GrGallery } from "react-icons/gr";


const Sidebar = ({ active, setActive }) => {

const menu = [
  {
    name: "Dashboard",
    icon: PiSquaresFourThin,
  },
  {
    name: "Employees",
    icon: FaUserGroup,
  },
  {
    name: "Recruitment",
    icon: FiSettings,
  },
  {
    name: "Leave Management",
    icon: CiCalendar,
  },
  {
    name: "Performance",
    icon: GoProjectSymlink,
  },
  {
    name: "Payroll",
    icon: GrGallery,
  },
];
  return (

        <aside class="w-[240px] h-[1024px] gap-[24px] bg-[#1F2A5B] text-white hidden md:flex flex-col">
          <div class="h-[80px] w-[240px] gap-[10px] p-[20px]  font-bold ">
            <div className='w-[200px] h-[40px] gap-[10px] flex align-middle'>
              <FaUser className='w-[33.33px] rounded-md  h-[33.33px] bg-[#1A73E8] p-[3.33px]' />
              <div className='w-[104px] h-[24px] justify-center p-2'>
                <p className='text-[16px] leading-[100%] font-[Poppins] font-semibold  w-[104px] h-[24px] '> Admin Panel</p>
              </div>

            </div>
          </div>

          <nav class="flex-1 p-4 space-y-2 h-[920px] w-[240px] px-[16px] gap-[8px] ">
     

         <ul className=" ">
  {menu.map((item) => {
    const Icon = item.icon;

    return (
      <li key={item.name} className="m-3">
        <a
          href="#"
          onClick={() => setActive(item.name)}
          className={`flex items-center rounded
            w-[199px] h-[44px] px-[16px]
            text-[#FAFDEC]
            hover:bg-blue-600 
            ${
              active === item.name
                ? "bg-blue-600"
                : ""
            }`}
        >
          <Icon className="h-[18px] w-[18px]" />
          <p className="p-2 font-[poppins] font-[400]">
            {item.name}
          </p>
        </a>
      </li>
    );
  })}
</ul>



          </nav>

          <div class="p-4 border-t border-white/10">
            <a href="#" class="flex items-center  rounded w-[204px] h-[44px] px-[16px] py-14px hover:bg-blue-600">

              <FiSettings className='h-[18px] w-[18px] ' />
              <p className='p-2 text-[#FAFDEC] font-[poppins] font-[400] '>Settings</p>
            </a>
            <a href="#" class="flex items-center  rounded w-[204px] h-[44px] px-[16px] py-14px hover:bg-blue-600">

              <LuLogOut className='h-[18px] w-[18px] ' />
              <p className='p-2 text-[#FAFDEC] font-[poppins] font-[400] '>Logout</p>
            </a>


          </div>
        </aside>

    // <div className="w-64 min-h-screen bg-[#1F2A55] text-white flex flex-col">
    //   <div className="px-6 py-6 text-xl font-bold">
    //     Admin Panel
    //   </div>

    //   <ul className="flex-1 space-y-2 px-4">
    //     {menu.map((item) => (
    //       <li
    //         key={item}
    //         onClick={() => setActive(item)}
    //         className={`cursor-pointer px-4 py-2 rounded-lg
    //           ${active === item ? "bg-blue-500" : "hover:bg-blue-400/30"}`}
    //       >
    //         {item}
    //       </li>
    //     ))}
    //   </ul>

    //   <div className="px-6 py-4 text-sm border-t border-white/20">
    //     Logout
    //   </div>
    // </div>
  );
};

export default Sidebar;
