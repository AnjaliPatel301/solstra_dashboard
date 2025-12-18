import { IoMdNotificationsOutline } from "react-icons/io";
import LeaveStats from "./LeaveStats";
import LeaveRequestCard from "./LeaveRequest";

const LeaveManagement = () => {
  return (
    <>
      {/* Header */}
      {/* <div className="flex pt-[14px] ps-[51px] h-[80px] w-full border-b border-[#D2D2D2] flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-[20px] text-[#1F2A5B] font-semibold">
            Leave Management
          </h1>
          <p className="text-[#1F2A5B] text-[12px]">
          </p>
          </div>
          
        <div className="flex items-center gap-4">
          <button className="bg-[#1A73E8] text-white px-4 py-2 rounded-lg text-sm">
            + Add Employee
          </button>
          <IoMdNotificationsOutline className="text-3xl" />
          <div className="w-9 h-9 rounded-full bg-[#1A73E8] text-white flex items-center justify-center font-semibold">
            S
          </div>
        </div>
        </div> */}

      {/* Header */}
      <div className="font-[poppins] flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-4 sm:px-6 py-4 border-b">
        <div>
          <h1 className="text-xl font-semibold text-[#1F2A5B]">
            {" "}
            Leave Management
          </h1>
          <p className="text-sm text-[#1F2A5B]">
            Review and manage employee leave requests
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm w-full md:w-auto">
            + Add Employee
          </button>
          <IoMdNotificationsOutline className="text-2xl hidden sm:block" />
          <div className="w-9 h-9 rounded-full bg-[#1A73E8] text-white flex items-center justify-center text-sm font-semibold">
            S
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="ps-[51px] pt-6 font-[poppins] pe-6">
        {/* Stats */}
        <LeaveStats />

        {/* Tabs */}
        <div className="flex gap-6 text-sm border-b mb-4">
          <button className="border-b-2 border-[#1A73E8] pb-2 text-[#1A73E8] font-medium">
            Pending (4)
          </button>
          <button className="pb-2 text-gray-500">Approved (3)</button>
          <button className="pb-2 text-gray-500">All Requests</button>
        </div>

        {/* Requests */}
        <div className="space-y-4">
          <LeaveRequestCard status="Pending" />
          <LeaveRequestCard status="Pending" />
          <LeaveRequestCard status="Pending" />
          <LeaveRequestCard status="Approved" />
          <LeaveRequestCard status="Approved" />
        </div>
      </div>
    </>
  );
};

export default LeaveManagement;
