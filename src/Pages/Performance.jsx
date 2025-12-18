import { IoMdNotificationsOutline } from "react-icons/io";
import PerformanceStats from "./PerformanceStats";
import PerformanceCard from "./PerformanceCard";

const Performance = () => {
  return (
    <>
      <div className="flex font-[poppins] flex-col md:flex-row md:items-center md:justify-between gap-4 px-4 sm:px-6 py-4 border-b">
        <div>
          <h1 className="text-xl font-semibold text-[#1F2A5B]"> Performance</h1>
          <p className="text-sm text-[#1F2A5B]">
            Track employee performance and maintain monthly notes.
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
      <div className="ps-[51px] pt-6 pe-6">
        {/* Stats */}
        <PerformanceStats />

        {/* Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <PerformanceCard
            name="Michael Roberts"
            role="Senior Developer"
            dept="Engineering"
            progress={80}
            note="Excellent performance, led successful deployment."
            review="Nov 2024"
          />

          <PerformanceCard
            name="Emma Thompson"
            role="UI/UX Designer"
            dept="Design"
            progress={65}
            note="Strong design skills, improved user engagement."
            review="Nov 2024"
          />

          <PerformanceCard
            name="Michael Roberts"
            role="Senior Developer"
            dept="Engineering"
            progress={85}
            note="Handled critical modules efficiently."
            review="Nov 2024"
          />

          <PerformanceCard
            name="Emma Thompson"
            role="UI/UX Designer"
            dept="Design"
            progress={70}
            note="Great collaboration with dev team."
            review="Nov 2024"
          />
        </div>
      </div>
    </>
  );
};

export default Performance;
