const LeaveRequest = ({ status }) => {
  const isPending = status === "Pending";

  return (
    <div className="font-[poppins] bg-white border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between hover:shadow transition">
      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-[#1F2A5B]">
          MR
        </div>
        <div>
          <h3 className="font-semibold text-[#1F2A5B]">
            Michael Roberts
            <span
              className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                isPending
                  ? "bg-orange-100 text-orange-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {status}
            </span>
          </h3>
          <p className="text-xs text-gray-500">
            Family vacation during the holidays
          </p>
          <p className="text-xs text-gray-400">
            Dec 20, 2024 – Dec 24, 2024 • 5 day(s)
          </p>
        </div>
      </div>

      {/* Actions */}
      {isPending && (
        <div className="flex gap-3 mt-3 md:mt-0">
          <button className="border border-red-500 text-red-500 px-4 py-1 rounded-lg text-xs hover:bg-red-50">
            ✕ Reject
          </button>
          <button className="border border-green-500 text-green-600 px-4 py-1 rounded-lg text-xs hover:bg-green-50">
            ✓ Approve
          </button>
        </div>
      )}
    </div>
  );
};

export default LeaveRequest;
