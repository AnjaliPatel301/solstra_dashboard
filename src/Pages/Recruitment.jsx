import { FaUsers, FaClock, FaDollarSign, FaPlus, FaEllipsisH } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineUsers } from "react-icons/hi2";

const stats = [
  { title: "Active Jobs", value: 4, icon: <HiOutlineUsers/>, color: "bg-green-100 text-green-600" },
  { title: "Total Applicants", value: 180, icon: <HiOutlineUsers/>, color: "bg-blue-100 text-blue-600" },
  { title: "Interviews Scheduled", value: 12, icon: <FaClock />, color: "bg-orange-100 text-orange-600" },
  { title: "Offers Pending", value: 3, icon: <FaDollarSign />, color: "bg-purple-100 text-purple-600" },
];

const jobs = [
  { title: "Senior Frontend Developer", dept: "Engineering", location: "Remote", type: "Full-Time", salary: "$120k–$150k", status: "Active", urgent: true, date: "Dec 2, 2025" },
  { title: "Product Manager", dept: "Product", location: "New York", type: "Full-Time", salary: "$100k–$150k", status: "Active", urgent: true, date: "Nov 26, 2025" },
  { title: "UI/UX Designer", dept: "Designing", location: "London", type: "Full-Time", salary: "$120k–$200k", status: "Active", urgent: false, date: "Nov 12, 2025" },
  { title: "Senior Frontend Developer", dept: "Engineering", location: "Remote", type: "Full-Time", salary: "$120k–$150k", status: "Active", urgent: false, date: "Dec 5, 2025" },
  { title: "Senior Frontend Developer", dept: "Engineering", location: "Remote", type: "Full-Time", salary: "$120k–$150k", status: "Paused", urgent: false, date: "Dec 20, 2025" },
];

export default function JobsDashboard() {
  return (
    <>
     <div class="flex font-semibold pt-[14px] ps-[51px]  h-[80px] w-[1220px] border-b border-[#D2D2D2] flex-col md:flex-row md:items-center md:justify-between">
                 <div className="h-[52px] w-[1098px] ">
                   <div className='h-[52px] w-[488px] '>
                     <h1 class="text-[20px] text-[#1F2A5B] font-semibold ">Recruitment</h1>
                     <p class="text-[#1F2A5B] text-[12px] ">Manage job openings and track applications.</p>
                   </div>
                 </div>
                 <div className='w-[262px] h-[38px] gap-[20px] flex '>
                   <button class="bg-blue-600 text-white w-[160px] font-[Poppins] font-[400] leading-[100%] h-[32px] px-[10px] rounded-[10px]">+ Add Employee</button>
                   <IoMdNotificationsOutline className='text-3xl' />
                   <div className="w-9 h-9 rounded-full bg-[#1A73E8] text-white flex items-center justify-center text-sm font-semibold">S</div>
     
                 </div> 
               </div>
    <div className="p-6 space-y-6 w-[1210px] h-[590px] ps-[43px] pt-[32px] ">

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="border rounded-xl p-4 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">{s.title}</p>
              <p className="text-xl font-semibold">{s.value}</p>
            </div>
            <div className={`p-3 rounded-lg ${s.color}`}>{s.icon}</div>
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex gap-6 text-sm">
          <span className="font-semibold">All Jobs (5)</span>
          <span className="text-gray-400">Active (4)</span>
          <span className="text-gray-400">Paused (1)</span>
        </div>
        <button className="flex items-center rounded-[10px] text-[12px] gap-2 bg-blue-600 text-white px-4 py-2  text-sm">
          <FaPlus /> Create Job Posting
        </button>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {jobs.map((job, i) => (
          <div key={i} className="border rounded-xl p-4 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-xs text-gray-500">{job.dept}</p>
              </div>
              <FaEllipsisH className="text-gray-400" />
            </div>

            {job.urgent && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600">Urgent</span>
            )}

            <div className="flex flex-wrap gap-4 text-xs text-gray-500">
              <span>{job.location}</span>
              <span>{job.type}</span>
              <span>{job.salary}</span>
            </div>

            <div className="flex justify-between items-center pt-2 border-t">
              <span className={`text-xs px-2 py-0.5 rounded-full ${job.status === "Active" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}>
                {job.status}
              </span>
              <span className="text-xs text-gray-400">Posted {job.date}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
    </>
  );
}
