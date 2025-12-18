import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosInformationCircle } from "react-icons/io";
import {
  FaUserPlus,
  FaClipboardList,
  FaEnvelope,
  FaStar,
} from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { MdApproval } from "react-icons/md";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { FaRegFileAlt } from "react-icons/fa";

const Dashboard = () => {
  return (
    <>
      {/* Main Wrapper */}
      {/* Top Section */}
      {/* Header */}
      <div className="flex flex-col md:flex-row font-[poppins] md:items-center md:justify-between gap-4 px-4 sm:px-6 py-4 border-b">
        <div>
          <h1 className="text-xl font-semibold text-[#1F2A5B]">Dashboard</h1>
          <p className="text-sm text-[#1F2A5B]">
            Welcome back, Sarah. Here's what's happening today.
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

      <div className="px-4 sm:px-8 md:px-12 font-[poppins]">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
          {[
            { title: "Total Employees", value: "248" },
            { title: "Open Positions", value: "12" },
            { title: "Leave Requests", value: "8" },
            { title: "Retention Rate", value: "94%" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-lg border p-6">
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="text-2xl font-semibold text-[#1F2A5B]">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Action Section */}
        <div className="py-8 font-[poppins]">
          <p className="text-2xl sm:text-3xl font-semibold text-[#1F2A5B]">
            Quick Action
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <ActionCard
              icon={<FaUserPlus />}
              label="Add Employee"
              bg="bg-[#E8F4F2]"
              text="text-[#1E9484]"
            />
            <ActionCard
              icon={<FaClipboardList />}
              label="Create Job Post"
              bg="bg-[#E6F5FC]"
              text="text-[#30A9E8]"
            />
            <ActionCard
              icon={<FaEnvelope />}
              label="Send Offer Letter"
              bg="bg-[#F7EEFB]"
              text="text-[#DC2828]"
            />
            <ActionCard
              icon={<FaStar />}
              label="Performance Review"
              bg="bg-[#F7EEFB]"
              text="text-[#AF57DB]"
            />
            <ActionCard
              icon={<HiOutlineDocumentDownload />}
              label="Export Payroll"
              bg="bg-[#F7EEFB]"
              text="text-[#F6AD2F]"
            />
            <ActionCard
              icon={<MdApproval />}
              label="Approve Leave"
              bg="bg-[#E8F9EE]"
              text="text-[#1E9484]"
            />
          </div>
        </div>

        {/* Recent Activity & Upcoming Tasks */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Recent Activity */}
          <div className="w-full md:w-1/2 bg-white rounded-lg border p-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#1F2A5B]">
              Recent Activity
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-4">
              Latest updates from your team
            </p>
            {activities.map((a, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3 border-b last:border-none"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
                    {a.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{a.text}</p>
                    <p className="text-xs text-gray-500">{a.time}</p>
                  </div>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full ${a.badge}`}>
                  {a.status}
                </span>
              </div>
            ))}
          </div>

          {/* Upcoming Tasks */}
          <div className="w-full md:w-1/2 bg-white rounded-lg border p-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#1F2A5B]">
              Upcoming Tasks
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-4">
              Your pending action items
            </p>
            {tasks.map((t, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3 border-b last:border-none"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center ${t.iconBg}`}
                  >
                    {t.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.text}</p>
                    <p className="text-xs text-gray-500">{t.time}</p>
                  </div>
                </div>
                <span
                  className={`text-xs px-3 py-1 rounded-full ${t.priority}`}
                >
                  {t.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

function ActionCard({ icon, label, bg, text }) {
  return (
    <div
      className={`flex flex-col items-center justify-center h-24 rounded-lg ${bg}`}
    >
      <div className={`text-xl mb-1 ${text}`}>{icon}</div>
      <p className={`text-sm font-medium ${text}`}>{label}</p>
    </div>
  );
}

// Sample Data for Activities
const activities = [
  {
    initials: "MR",
    text: "Michael Roberts submitted a leave request",
    time: "2 minutes ago",
    status: "Leave",
    badge: "bg-yellow-100 text-yellow-700",
  },
  {
    initials: "ET",
    text: "Emma Thompson completed onboarding",
    time: "1 hour ago",
    status: "Onboarding",
    badge: "bg-green-100 text-green-600",
  },
  {
    initials: "DK",
    text: "David Kim applied for Senior Developer",
    time: "3 hours ago",
    status: "Application",
    badge: "bg-blue-100 text-blue-600",
  },
  {
    initials: "LW",
    text: "Lisa Wang performance review scheduled",
    time: "5 hours ago",
    status: "Performance",
    badge: "bg-purple-100 text-purple-600",
  },
  {
    initials: "JM",
    text: "James Miller department transfer approved",
    time: "Yesterday",
    status: "Transfer",
    badge: "bg-cyan-100 text-cyan-600",
  },
];

// Sample Data for Tasks
const tasks = [
  {
    icon: <IoCalendarClearOutline />,
    iconBg: "bg-emerald-50",
    text: "Review Michael's leave request",
    time: "Today",
    level: "High",
    priority: "bg-red-100 text-red-600",
  },
  {
    icon: <FaRegUser />,
    iconBg: "bg-purple-50",
    text: "Complete Emma's onboarding checklist",
    time: "Today",
    level: "High",
    priority: "bg-red-100 text-red-600",
  },
  {
    icon: <CiClock2 />,
    iconBg: "bg-red-50",
    text: "Interview: Sarah Johnson - PM Role",
    time: "Tomorrow, 2:00 PM",
    level: "Medium",
    priority: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: <FaRegFileAlt />,
    iconBg: "bg-orange-50",
    text: "Prepare monthly payroll report",
    time: "Dec 15",
    level: "Medium",
    priority: "bg-yellow-100 text-yellow-700",
  },
];

export default Dashboard;
