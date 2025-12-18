import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosInformationCircle } from "react-icons/io";
import EmployeeRow from "./EmployeeRow";

const employeesData = [
  {
    name: "Michael Roberts",
    email: "michael@company.com",
    dept: "Engineering",
    role: "Senior Developer",
    status: "Active",
    join: "Jan 15, 2023",
    checkin: "09:00 AM",
    logout: "05:00 PM",
  },
  {
    name: "Emma Thompson",
    email: "emma@company.com",
    dept: "Design",
    role: "UI/UX Designer",
    status: "Onboarding",
    join: "Dec 1, 2024",
    checkin: "09:10 AM",
    logout: "06:00 PM",
  },
  {
    name: "David Kim",
    email: "david@company.com",
    dept: "Marketing",
    role: "Marketing Manager",
    status: "Application",
    join: "Mar 20, 2022",
    checkin: "08:40 AM",
    logout: "05:00 PM",
  },
];

const Employees = () => {
  const [search, setSearch] = useState("");

  const filteredEmployees = employeesData.filter((e) =>
    `${e.name} ${e.email} ${e.dept}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      {/* Header */}
      <div className="flex font-[poppins] flex-col gap-4 px-4 sm:px-6 py-4 border-b md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-xl font-semibold text-[#1F2A5B]">Employees</h1>
          <p className="text-sm text-[#1F2A5B]">
            Manage your team members and their information.
          </p>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
            + Add Employee
          </button>
          <IoMdNotificationsOutline className="text-2xl hidden sm:block" />
          <div className="w-9 h-9 rounded-full bg-[#1A73E8] text-white flex items-center justify-center text-sm font-semibold">
            S
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 space-y-6">
        {/* Search + Filter */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex items-center gap-2 bg-white border rounded-lg px-4 py-2 flex-1">
            <FaSearch className="text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search by name, email or department..."
              className="w-full outline-none text-sm"
            />
          </div>

          <button className="flex items-center justify-center gap-2 bg-white border rounded-lg px-4 py-2 text-sm">
            <HiOutlineAdjustmentsHorizontal /> Filter
          </button>
        </div>

        {/* Info */}
        <div className="bg-blue-50 border border-blue-200 flex gap-2 px-4 py-3 text-blue-700 text-sm rounded-lg">
          <IoIosInformationCircle className="text-lg shrink-0" />
          You can only update the attendance record within the last 31 days.
        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden md:block bg-white rounded-lg overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                {[
                  "Employees",
                  "Department",
                  "Role",
                  "Status",
                  "Join Date",
                  "Check-in",
                  "Logged Time",
                ].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs">
                    {h}
                  </th>
                ))}
                <th />
              </tr>
            </thead>

            <tbody className="divide-y">
              {filteredEmployees.map((emp, i) => (
                <EmployeeRow key={i} {...emp} />
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE CARDS */}
        <div className="md:hidden space-y-4">
          {filteredEmployees.map((emp, i) => (
            <div key={i} className="bg-white border rounded-lg p-4 space-y-2">
              <div className="font-semibold text-[#1F2A5B]">{emp.name}</div>
              <p className="text-xs text-gray-500">{emp.email}</p>

              <div className="flex justify-between text-sm">
                <span>Department</span>
                <span>{emp.dept}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Role</span>
                <span>{emp.role}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Status</span>
                <span className="font-medium">{emp.status}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span>Check-in</span>
                <span>{emp.checkin}</span>
              </div>
            </div>
          ))}

          {filteredEmployees.length === 0 && (
            <div className="text-center text-gray-400 py-6">
              No employees found
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Employees;
