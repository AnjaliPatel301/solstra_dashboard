import { FaUserGroup, FaUser } from "react-icons/fa6";
import { PiSquaresFourThin } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { GoProjectSymlink } from "react-icons/go";
import { LuLogOut } from "react-icons/lu";
import { GrGallery } from "react-icons/gr";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ active, setActive, sidebarOpen, setSidebarOpen }) => {
  const menu = [
    { name: "Dashboard", icon: PiSquaresFourThin },
    { name: "Employees", icon: FaUserGroup },
    { name: "Recruitment", icon: FiSettings },
    { name: "Leave", icon: CiCalendar },
    { name: "Performance", icon: GoProjectSymlink },
    { name: "Payroll", icon: GrGallery },
  ];

  return (
    <>
      {/* Overlay (Mobile) */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:sticky top-0 left-0 z-50
          h-screen w-[240px]
          bg-[#1F2A5B] text-white
          transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:flex flex-col
        `}
      >
        {/* Header */}
        <div className="h-[80px] px-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaUser className="w-8 h-8 bg-[#1A73E8] rounded-md p-1" />
            <p className="font-semibold text-lg">Admin Panel</p>
          </div>

          {/* Close button (Mobile) */}
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <IoClose size={22} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 pt-2 space-y-2">
          {menu.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => {
                  setActive(item.name);
                  setSidebarOpen(false);
                }}
                className={`
                  flex items-center gap-3 w-full h-[44px] px-4 rounded
                  hover:bg-blue-600 transition
                  ${active === item.name ? "bg-blue-600" : ""}
                `}
              >
                <Icon size={18} />
                <span className="text-sm">{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <button className="flex items-center gap-3 w-full h-[44px] px-4 rounded hover:bg-blue-600">
            <FiSettings size={18} />
            <span>Settings</span>
          </button>

          <button className="flex items-center gap-3 w-full h-[44px] px-4 rounded hover:bg-blue-600">
            <LuLogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
