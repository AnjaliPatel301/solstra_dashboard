const PerformanceStats = () => {
  const stats = [
    { title: "Avg. Rating", value: "4.2" },
    { title: "Goals Completed", value: "85%" },
    { title: "Top Performers", value: "12" },
    { title: "Reviews Due", value: "8" },
  ];

  return (
    <div className="grid font-[poppins] grid-cols-1 md:grid-cols-4 gap-6">
      {stats.map((item, i) => (
        <div
          key={i}
          className="bg-white border rounded-lg p-4 hover:shadow transition"
        >
          <p className="text-sm text-gray-500">{item.title}</p>
          <h2 className="text-xl font-semibold text-[#1F2A5B]">{item.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default PerformanceStats;
