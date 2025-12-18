import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import PayrollRow from "./PayrollRow";

const payrollData = [
  {
    name: "Michael Roberts",
    dept: "Engineering",
    salary: "$12,000",
    bonus: "+$1,000",
    deduction: "-$2,000",
    net: "$11,000",
    status: "Processed",
  },
  {
    name: "Emma Thompson",
    dept: "Design",
    salary: "$8,500",
    bonus: "+$1,500",
    deduction: "-$500",
    net: "$9,500",
    status: "Processed",
  },
  {
    name: "David Kim",
    dept: "Marketing",
    salary: "$9,000",
    bonus: "+$1,000",
    deduction: "-$700",
    net: "$9,300",
    status: "Pending",
  },
];

const Payroll = () => {
  return (
    <>
      {/* Header */}
      <div className="flex  font-[poppins] flex-col md:flex-row md:items-center md:justify-between gap-4 px-4 sm:px-6 py-4 border-b">
        <div>
          <h1 className="text-xl font-semibold text-[#1F2A5B]">Payroll</h1>
          <p className="text-sm text-[#1F2A5B]">
            Export and manage monthly payroll data
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
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Total Payroll</p>
            <h2 className="text-xl font-semibold text-[#1F2A5B]">$51,050</h2>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Employees</p>
            <h2 className="text-xl font-semibold text-[#1F2A5B]">6</h2>
          </div>

          <div className="bg-white p-4 rounded-lg border flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Processed</p>
              <h2 className="text-xl font-semibold text-[#1F2A5B]">4/6</h2>
            </div>
            <FaCheckCircle className="text-green-500 text-xl" />
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <p className="text-sm text-gray-500">Pay Period</p>
            <h2 className="text-xl font-semibold text-[#1F2A5B]">Dec 2024</h2>
          </div>
        </div>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden md:block bg-white rounded-lg border overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#F2F2F2] text-gray-600">
              <tr>
                {[
                  "Employee",
                  "Department",
                  "Base Salary",
                  "Bonus",
                  "Deductions",
                  "Net Pay",
                  "Status",
                ].map((h) => (
                  <th key={h} className="text-left p-4 text-xs">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y">
              {payrollData.map((row, i) => (
                <PayrollRow key={i} {...row} />
              ))}
            </tbody>
          </table>

          <div className="flex justify-end p-4 font-semibold">
            Total for December 2024: $51,050
          </div>
        </div>

        {/* ================= MOBILE CARDS ================= */}
        <div className="md:hidden space-y-4">
          {payrollData.map((row, i) => (
            <div key={i} className="bg-white border rounded-lg p-4 space-y-2">
              <div className="font-semibold text-[#1F2A5B]">{row.name}</div>
              <p className="text-xs text-gray-500">{row.dept}</p>

              <div className="flex justify-between text-sm">
                <span>Salary</span>
                <span>{row.salary}</span>
              </div>

              <div className="flex justify-between text-sm text-green-600">
                <span>Bonus</span>
                <span>{row.bonus}</span>
              </div>

              <div className="flex justify-between text-sm text-red-500">
                <span>Deductions</span>
                <span>{row.deduction}</span>
              </div>

              <div className="flex justify-between font-medium">
                <span>Net Pay</span>
                <span>{row.net}</span>
              </div>

              <span
                className={`inline-block text-xs px-3 py-1 rounded-full ${
                  row.status === "Processed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {row.status}
              </span>
            </div>
          ))}

          <div className="text-right font-semibold pt-2">Total: $51,050</div>
        </div>
      </div>
    </>
  );
};

export default Payroll;
