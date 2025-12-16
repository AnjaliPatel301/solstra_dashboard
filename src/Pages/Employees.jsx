import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosInformationCircle } from "react-icons/io";
import EmployeeRow from "./EmployeeRow"

const Employees = () => {
  return (
    
       <>

          <div class="flex pt-[14px] ps-[51px]  h-[80px] w-[1220px] border-b border-[#D2D2D2] flex-col md:flex-row md:items-center md:justify-between">
            <div className="h-[52px] w-[1098px] ">
              <div className='h-[52px] w-[488px] '>
                <h1 class="text-[20px] text-[#1F2A5B] font-semibold ">Employees</h1>
                <p class="text-[#1F2A5B] text-[12px] ">Manage your team members and their information.</p>
              </div>
            </div>
            <div className='w-[262px] h-[38px] gap-[20px] flex '>
              <button class="bg-blue-600 font-[Poppins] font-[400] leading-[100%] text-white w-[160px] h-[32px] px-[10px] rounded-[10px]">+ Add Employee</button>
              <IoMdNotificationsOutline className='text-3xl' />
              <div className="w-9 h-9 rounded-full bg-[#1A73E8]  text-white flex items-center justify-center text-sm font-semibold">S</div>

            </div>
          </div>



          <div className=' w-[1240px] h-[590px] ps-[43px] pt-[32px]  gap-[24px]'>
          {/* Search + Filter */}
       <div className='w-[1140px] '>
           <div className="flex flex-col lg:flex-row gap-[20px] ">
            <div className="flex items-center gap-2 bg-white border rounded-lg px-4 py-3 my-2 flex-1">
              <FaSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email or department..."
                className="w-full outline-none text-sm"
              />
            </div>
            <button className="flex items-center gap-2 bg-white border h-[40px] w-[120px] rounded-lg p-5 my-2  text-sm">
              <HiOutlineAdjustmentsHorizontal /> Filter
            </button>
          </div>


          {/* Info Box */}
          <div className="bg-[#1A73E833] border flex gap-1px my-4 px-[21.06px] py-[10.53px] border-blue-200 text-blue-700 text-sm rounded-lg ">
           <IoIosInformationCircle className='text-xl'/> You can only update the attendance record within the last 31 days.
          </div>

       </div>

          {/* Table */}
          <div className="bg-white  rounded-lg  overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#D9D9D9] p-[19.44px] gap-[68.05px] rounded-[5.83px] text-gray-500">
                <tr>
                  <th className=" text-left p-[19.44px] text-[11.67px] font-[500] ps-6">Employees</th>
                  <th className="text-left p-[19.44px] text-[11.67px] font-[500]">Department</th>
                  <th className="text-left p-[19.44px] text-[11.67px] font-[500]">Role</th>
                  <th className="text-left p-[19.44px] text-[11.67px] font-[500]">Status</th>
                  <th className="text-left p-[19.44px] text-[11.67px] font-[500]">Join Date</th>
                  <th className="text-left p-[19.44px] text-[11.67px] font-[500]">Check-in Time</th>
                  <th className="text-left p-[19.44px] text-[11.67px] font-[500]">Logged Time</th>
                  <th className="px-4 py-3 bg-white border-none"></th>
                </tr>
              </thead>
              
              <tbody className="divide-y">
          <EmployeeRow
            name="Michael Roberts"
            email="michael@company.com"
            dept="Engineering"
            role="Senior Developer"
            status="Active"
            join="Jan 15, 2023"
            checkin="09:00 AM"
            logout="05:00 PM"
          />

          <EmployeeRow
            name="Emma Thompson"
            email="emma@company.com"
            dept="Design"
            role="UI/UX Designer"
            status="Onboarding"
            join="Dec 1, 2024"
            checkin="09:10 AM"
            logout="06:00 PM"
          />

          <EmployeeRow
            name="David Kim"
            email="david@company.com"
            dept="Marketing"
            role="Marketing Manager"
            status="Application"
            join="Mar 20, 2022"
            checkin="08:40 AM"
            logout="05:00 PM"
          />

          <EmployeeRow
            name="Lisa Wang"
            email="lisa@company.com"
            dept="Engineering"
            role="Product Manager"
            status="Active"
            join="Jun 10, 2023"
            checkin="09:00 AM"
            logout="05:00 PM"
          />

          <EmployeeRow
            name="James Miller"
            email="james@company.com"
            dept="Sales"
            role="Sales Lead"
            status="Leave"
            join="Sep 5, 2021"
            checkin="09:00 AM"
            logout="06:30 PM"
          />

          <EmployeeRow
            name="Sarah Johnson"
            email="sarah@company.com"
            dept="HR"
            role="HR Specialist"
            status="Active"
            join="Feb 28, 2024"
            checkin="09:01 AM"
            logout="04:00 PM"
          />
        </tbody>
     
             
            </table>
          </div>
          </div>
</>
  );
};

export default Employees;
