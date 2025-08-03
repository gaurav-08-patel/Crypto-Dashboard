import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableContainer = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+₹81,123",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-₹55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: "-5.05555544",
      status: "completed",
    },
  ];

  let statusColor = {
    processing: "#F5A50B",
    pending: "#797E82",
    cancelled: "#DC2626",
    completed: "#059669",
  };

  return (
    <div className="overflow-x-auto">
      <Table className="min-w-[650px]">
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-400 max-xsm:text-xs">ID</TableHead>
            <TableHead className="text-gray-400 max-xsm:text-xs">Date & Time</TableHead>
            <TableHead className="text-gray-400 max-xsm:text-xs">Type</TableHead>
            <TableHead className="text-gray-400 max-xsm:text-xs">Amount</TableHead>
            <TableHead className="text-gray-400 max-xsm:text-xs">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="font-medium  py-5  max-xsm:text-xs">{data.id}</TableCell>
              <TableCell className="flex flex-col justify-center  py-5  max-xsm:text-xs">
                <span className="font-medium">{data.date}</span>
                <span className="text-[12px] text-gray-500">{data.time}</span>
              </TableCell>
              <TableCell className="py-5 max-xsm:text-xs">
                <span className="font-medium">{data.type.name}</span>
                <br />
                <span className="text-[12px] text-gray-500">
                  {data.type.tag || ""}
                </span>
              </TableCell>
              <TableCell className="py-5 font-medium max-xsm:text-xs">{data.amount}</TableCell>
              <TableCell className="py-5  max-xsm:text-xs">
                <span
                  style={{ backgroundColor: statusColor[data.status] }}
                  className=" p-1.5 rounded-xl text-white"
                >
                  {data.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableContainer;
