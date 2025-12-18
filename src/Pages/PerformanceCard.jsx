const PerformanceCard = ({ name, role, dept, progress, note, review }) => {
  return (
    <div className="bg-white border font-[poppins] rounded-lg p-5 hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-[#1F2A5B]">
          {name[0]}
        </div>
        <div>
          <h3 className="font-semibold text-[#1F2A5B]">{name}</h3>
          <p className="text-xs text-gray-500">
            {role} • {dept}
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Goals Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-[#1A73E8] h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Notes */}
      <div className="bg-[#F8FAFF] p-3 rounded-lg text-sm text-gray-600 mb-3">
        <strong>Latest Note:</strong> {note}
      </div>

      {/* Footer */}
      <div className="flex justify-between text-xs text-gray-500">
        <span>Last review: {review}</span>
        <button className="text-[#1A73E8] font-medium hover:underline">
          View Full Report
        </button>
      </div>
    </div>
  );
};

export default PerformanceCard;
