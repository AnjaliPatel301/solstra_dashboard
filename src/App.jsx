import { useState } from "react";
import Sidebar from "./component/Sidebar";

import Dashboard from "./Pages/Dashboard";
import Employees from "./Pages/Employees";
import Recruitment from "./Pages/Recruitment";
import Leave from "./Pages/Leave";
import Performance from "./Pages/Performance";
import Payroll from "./Pages/Payroll";

function App() {
  const [active, setActive] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false); // ✅ NEW

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
      {/* Sidebar */}
      <Sidebar
        active={active}
        setActive={setActive}
        sidebarOpen={sidebarOpen} // ✅ NEW
        setSidebarOpen={setSidebarOpen} // ✅ NEW
      />

      {/* Main Content */}
      <div className="flex-1 min-h-screen">
        {/* Mobile Menu Button */}
        <div className="md:hidden p-3">
          <button onClick={() => setSidebarOpen(true)} className="text-xl">
            ☰
          </button>
        </div>

        {renderPage()}
      </div>
    </div>
  );
}

export default App;
