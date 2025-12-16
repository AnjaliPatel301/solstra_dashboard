// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { FaUserGroup } from "react-icons/fa6";
// import { FaUser } from "react-icons/fa";
// import { PiSquaresFourThin } from "react-icons/pi";
// import { FiSettings } from "react-icons/fi";
// import { CiCalendar } from "react-icons/ci";
// import { GoProjectSymlink } from "react-icons/go";
// import { FaPager } from "react-icons/fa";
// import { FaSearch, FaFilter, FaEllipsisH } from "react-icons/fa";
// import { LuLogOut } from "react-icons/lu";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
// import { IoIosInformationCircle } from "react-icons/io";


// function EmployeeRow({ name, email, dept, role, status, join, checkin, logout }) {
//   const statusStyle = {
//     Active: 'bg-[#B8FFD1] border border-[#21B756] text-green-600',
//     Onboarding: 'bg-[#E8F9EE] border border-[#E8F9EE] text-emerald-600',
//     Application: 'bg-[#BAE4F8] border border-[#BAE4F8] text-blue-600',
//     Leave: 'bg-[#FFE3AF] border border-[#FFE3AF] text-black ',
//   }[status];


//   return (
//     <tr className="hover:bg-gray-50">
//       <td className="px-4 py-3">
//         <div className="flex items-center gap-3">
//           <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-600">
//             {name.split(' ').map(n => n[0]).join('')}
//           </div>
//           <div>
//             <p className="font-medium">{name}</p>
//             <p className="text-xs text-gray-500">{email}</p>
//           </div>
//         </div>
//       </td>
//       <td className="px-4 py-3">{dept}</td>
//       <td className="px-4 py-3">{role}</td>
//       <td className="px-4 py-3">
//         <span className={`text-xs px-3 py-1 rounded-full ${statusStyle}`}>{status}</span>
//       </td>
//       <td className="px-4 py-3">{join}</td>
//       <td className="px-4 py-3">{checkin}</td>
//       <td className="px-4 py-3">{logout}</td>
//       <td className="px-4 py-3 text-right">
//         <FaEllipsisH className="text-gray-400 cursor-pointer" />
//       </td>
//     </tr>
//   );
// }
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div class="flex font-[poppins]">


//         <aside class="w-[240px] h-[1024px] gap-[24px] bg-[#1F2A5B] text-white hidden md:flex flex-col">
//           <div class="h-[80px] w-[240px] gap-[10px] p-[20px]  font-bold ">
//             <div className='w-[200px] h-[40px] gap-[10px] flex align-middle'>
//               <FaUser className='w-[33.33px] rounded-md  h-[33.33px] bg-[#1A73E8] p-[3.33px]' />
//               <div className='w-[104px] h-[24px] justify-center p-2'>
//                 <p className='text-[16px] leading-[100%] font-[Poppins] font-semibold  w-[104px] h-[24px] '> Admin Panel</p>
//               </div>

//             </div>
//           </div>

//           <nav class="flex-1 p-4 space-y-2 h-[920px] w-[240px] px-[16px] gap-[8px] ">
//             <a href="#" class="flex items-center  rounded w-[208px] h-[44px] px-[16px] py-14px hover:bg-blue-600 ">

//               <PiSquaresFourThin className='h-[18px] w-[18px] ' />
//               <p className='p-2 text-[#FAFDEC] font-[poppins] font-[400]  '>Dashboard</p>
//             </a>

//             <a href="#" class="flex items-center  rounded w-[204px] h-[44px] px-[16px] py-14px bg-blue-600 hover:bg-blue-600">

//               <FaUserGroup className='h-[18px] w-[18px] ' />
//               <p className='p-2 text-[#FAFDEC] font-[poppins] font-[400]  '>Employees</p>
//             </a>


//             <a href="#" class="flex items-center  rounded w-[204px] h-[44px] px-[16px] py-14px hover:bg-blue-600">

//               <FiSettings className='h-[18px] w-[18px] ' />
//               <p className='p-2 text-[#FAFDEC] font-[poppins] font-[400] '>Recruitment</p>
//             </a>


//             <a href="#" class="flex items-center  rounded w-[204px] h-[44px] px-[16px] py-14px hover:bg-blue-600">

//               <CiCalendar className='h-[18px] w-[18px] ' />
//               <p className='p-2 text-[#FAFDEC] font-[poppins] font-[400] '>Leave Management</p>
//             </a>


//             <a href="#" class="flex items-center  rounded w-[204px] h-[44px] px-[16px] py-14px hover:bg-blue-600">

//               <FaPager className='h-[18px] w-[18px] ' />
//               <p className='p-2 text-[#FAFDEC] font-[poppins] font-[400] '>Performance</p>
//             </a>


//             <a href="#" class="flex items-center  rounded w-[204px] h-[44px] px-[16px] py-14px hover:bg-blue-600">

//               <GoProjectSymlink className='h-[18px] w-[18px] ' />
//               <p className='p-2 text-[#FAFDEC] font-[poppins] font-[400] '>Payroll</p>
//             </a>


//           </nav>

//           <div class="p-4 border-t border-white/10">
//             <a href="#" class="flex items-center  rounded w-[204px] h-[44px] px-[16px] py-14px hover:bg-blue-600">

//               <FiSettings className='h-[18px] w-[18px] ' />
//               <p className='p-2 text-[#FAFDEC] font-[poppins] font-[400] '>Settings</p>
//             </a>
//             <a href="#" class="flex items-center  rounded w-[204px] h-[44px] px-[16px] py-14px hover:bg-blue-600">

//               <LuLogOut className='h-[18px] w-[18px] ' />
//               <p className='p-2 text-[#FAFDEC] font-[poppins] font-[400] '>Logout</p>
//             </a>


//           </div>
//         </aside>


//         <div className="">


//           <div class="flex pt-[14px] ps-[51px]  h-[80px] w-[1220px] border-b border-[#D2D2D2] flex-col md:flex-row md:items-center md:justify-between">
//             <div className="h-[52px] w-[1098px] ">
//               <div className='h-[52px] w-[488px] '>
//                 <h1 class="text-[20px] text-[#1F2A5B] font-semibold ">Employees</h1>
//                 <p class="text-[#1F2A5B] text-[12px] ">Manage your team members and their information.</p>
//               </div>
//             </div>
//             <div className='w-[262px] h-[38px] gap-[20px] flex '>
//               <button class="bg-blue-600 text-white w-[160px] h-[32px] px-[10px] rounded-[10px]">+ Add Employee</button>
//               <IoMdNotificationsOutline className='text-3xl' />
//               <div className="w-9 h-9 rounded-full bg-[#1A73E8] text-white flex items-center justify-center text-sm font-semibold">S</div>

//             </div>
//           </div>



// <div className=' w-[1240px] h-[590px] ps-[43px] pt-[32px]  gap-[24px]'>
//           {/* Search + Filter */}
//        <div className='w-[1140px] '>
//            <div className="flex flex-col lg:flex-row gap-[20px] ">
//             <div className="flex items-center gap-2 bg-white border rounded-lg px-4 py-3 my-2 flex-1">
//               <FaSearch className="text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search by name, email or department..."
//                 className="w-full outline-none text-sm"
//               />
//             </div>
//             <button className="flex items-center gap-2 bg-white border h-[40px] w-[120px] rounded-lg p-5 my-2  text-sm">
//               <HiOutlineAdjustmentsHorizontal /> Filter
//             </button>
//           </div>


//           {/* Info Box */}
//           <div className="bg-[#1A73E833] border flex gap-1px my-4 px-[21.06px] py-[10.53px] border-blue-200 text-blue-700 text-sm rounded-lg ">
//            <IoIosInformationCircle className='text-xl'/> You can only update the attendance record within the last 31 days.
//           </div>

//        </div>

//           {/* Table */}
//           <div className="bg-white  rounded-lg  overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead className="bg-[#D9D9D9] p-[19.44px] gap-[68.05px] rounded-[5.83px] text-gray-500">
//                 <tr>
//                   <th className=" text-left p-[19.44px] text-[11.67px] font-[500] ps-6">Employees</th>
//                   <th className="text-left p-[19.44px] text-[11.67px] font-[500]">Department</th>
//                   <th className="text-left p-[19.44px] text-[11.67px] font-[500]">Role</th>
//                   <th className="text-left p-[19.44px] text-[11.67px] font-[500]">Status</th>
//                   <th className="text-left p-[19.44px] text-[11.67px] font-[500]">Join Date</th>
//                   <th className="text-left p-[19.44px] text-[11.67px] font-[500]">Check-in Time</th>
//                   <th className="text-left p-[19.44px] text-[11.67px] font-[500]">Logged Time</th>
//                   <th className="px-4 py-3 bg-white border-none"></th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y">
//                 <EmployeeRow name="Michael Roberts" email="michael@company.com" dept="Engineering" role="Senior Developer" status="Active" join="Jan 15, 2023" checkin="09:00 AM" logout="05:00 PM" />
//                 <EmployeeRow name="Emma Thompson" email="emma@company.com" dept="Design" role="UI/UX Designer" status="Onboarding" join="Dec 1, 2024" checkin="09:10 AM" logout="06:00 PM" />
//                 <EmployeeRow name="David Kim" email="david@company.com" dept="Marketing" role="Marketing Manager" status="Application" join="Mar 20, 2022" checkin="08:40 AM" logout="05:00 PM" />
//                 <EmployeeRow name="Lisa Wang" email="lisa@company.com" dept="Engineering" role="Product Manager" status="Active" join="Jun 10, 2023" checkin="09:00 AM" logout="05:00 PM" />
//                 <EmployeeRow name="James Miller" email="james@company.com" dept="Sales" role="Sales Lead" status="Leave" join="Sep 5, 2021" checkin="09:00 AM" logout="06:30 PM" />
//                 <EmployeeRow name="Sarah Johnson" email="sarah@company.com" dept="HR" role="HR Specialist" status="Active" join="Feb 28, 2024" checkin="09:01 AM" logout="04:00 PM" />
//               </tbody>
//             </table>
//           </div>
//         </div>


// </div>
//     </div>
//     </>
//   )
// }

// export default App


import { useState } from "react";
import Sidebar from "./component/Sidebar"

import Dashboard from "./Pages/Dashboard"
import Employees from "./Pages/Employees"
import Recruitment from "./Pages/Recruitment"
import Leave from "./Pages/Leave"
import Performance from "./Pages/Performance"
import Payroll from "./Pages/Payroll"

function App() {
  const [active, setActive] = useState("Dashboard");

  const renderPage = () => {
    switch (active) {
      case "Employees":
        return <Employees />;
      case "Recruitment":
        return <Recruitment />;
      case "Leave":
        return <Leave />;
      case "Performance":
        return <Performance />;
      case "Payroll":
        return <Payroll />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex">
      <Sidebar active={active} setActive={setActive} />

      {/* Right Content */}
      <div className="flex-1 min-h-screen">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
