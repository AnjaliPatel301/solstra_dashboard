function EmployeeRow({ name, email, dept, role, status, join, checkin, logout }) {
  const statusStyle = {
    Active: 'bg-green-100 text-green-600',
    Onboarding: 'bg-emerald-100 text-emerald-600',
    Application: 'bg-blue-100 text-blue-600',
    Leave: 'bg-yellow-100 text-yellow-700',
  }[status];

  return (
    <tr className="border-b last:border-none">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-600">
            {name.split(" ").map(n => n[0]).join("")}
          </div>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-500">{email}</p>
          </div>
        </div>
      </td>

      <td className="py-4">{dept}</td>
      <td className="py-4">{role}</td>

      <td className="py-4">
        <span className={`px-3 py-1 text-xs rounded-full ${statusStyle}`}>
          {status}
        </span>
      </td>

      <td className="py-4">{join}</td>
      <td className="py-4">{checkin}</td>
      <td className="py-4">{logout}</td>

      <td className="py-4 text-right pr-6">⋯</td>
    </tr>
  );
}

export default EmployeeRow;
