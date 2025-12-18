const PayrollRow = ({ name, dept, salary, bonus, deduction, net, status }) => {
  const statusStyle =
    status === "Processed"
      ? "bg-green-100 text-green-700"
      : "bg-yellow-100 text-yellow-700";

  return (
    <tr className="font-[poppins]">
      <td className="p-4 font-medium text-[#1F2A5B]">{name}</td>
      <td className="p-4">{dept}</td>
      <td className="p-4">{salary}</td>
      <td className="p-4 text-green-600">{bonus}</td>
      <td className="p-4 text-red-500">{deduction}</td>
      <td className="p-4 font-semibold">{net}</td>
      <td className="p-4">
        <span className={`px-3 py-1 rounded-full text-xs ${statusStyle}`}>
          {status}
        </span>
      </td>
    </tr>
  );
};

export default PayrollRow;
