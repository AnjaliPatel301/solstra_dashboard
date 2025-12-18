import {
  FaClock,
  FaCheckCircle,
  FaUserTimes,
  FaCalendarDay,
} from "react-icons/fa";

const stats = [
  {
    title: "Pending Requests",
    value: "3",
    icon: <FaClock />,
    color: "text-orange-500",
  },
  {
    title: "Approved This Month",
    value: "12",
    icon: <FaCheckCircle />,
    color: "text-green-500",
  },
  {
    title: "On Leave Today",
    value: "4",
    icon: <FaUserTimes />,
    color: "text-blue-500",
  },
  {
    title: "Avg Days/Employee",
    value: "2.5",
    icon: <FaCalendarDay />,
    color: "text-purple-500",
  },
];

const LeaveStats = () => {
  return (
    <div className="grid font-[poppins] grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      {stats.map((item, i) => (
        <div
          key={i}
          className="bg-white border rounded-lg p-4 flex justify-between items-center hover:shadow transition"
        >
          <div>
            <p className="text-sm text-gray-500">{item.title}</p>
            <h2 className="text-xl font-semibold text-[#1F2A5B]">
              {item.value}
            </h2>
          </div>
          <div className={`text-xl ${item.color}`}>{item.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default LeaveStats;
