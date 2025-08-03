import { Button } from "@/components/ui/button";
import { IndianRupee, Bitcoin } from "lucide-react";
import { Link } from "react-router-dom";

const RecentTrans = () => {
  let transactions = [
    {
      id: 1,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      time: "2022-06-09 7:06 PM",
      icon: IndianRupee,
    },
    {
      id: 2,
      text: "BTC Sell",
      amount: "- 12.48513391 BTC",
      time: "2022-06-10 5:16 PM",
      icon: Bitcoin,
    },
    {
      id: 3,
      text: "INR Deposit",
      amount: "+ ₹81,100.10",
      time: "2022-06-011 3:56 PM",
      icon: IndianRupee,
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 flex-1/2">
      <h1
        className="flex text-[14px] max-md:text-[12px] items-center gap-1
          text-gray-600 font-medium"
      >
        Recent Transactions
      </h1>
      <section className="flex flex-col gap-2 pt-4">
        {transactions.map((trans) => (
          <article key={trans.id}>
            <div className="p-2 flex justify-between items-center">
              <div className="flex gap-2.5 items-center">
                <span
                  className="size-10 bg-gray-200 rounded-full flex
                    justify-center items-center"
                >
                  <p
                    className="text-white bg-black p-0.5 rounded-full flex
                      justify-center items-center"
                  >
                    {<trans.icon size={13} />}
                  </p>
                </span>
                <span>
                  <h1 className="font-medium max-md:text-[14px]">
                    {" "}
                    {trans.text}{" "}
                  </h1>
                  <p className="text-[12px] text-gray-500 max-md:text-[10px]">
                    {trans.time}
                  </p>
                </span>
              </div>
              <div className="font-medium max-md:text-[14px]">
                {trans.amount}
              </div>
            </div>
            {transactions.indexOf(trans) + 1 !== transactions.length ? (
              <hr className="w-9/10 ml-auto" />
            ) : (
              ""
            )}
          </article>
        ))}

        <Button className="text-black bg-gray-200 cursor-pointer hover:bg-gray-200">
          {" "}
          <Link to="/transactions">View all </Link>{" "}
        </Button>
      </section>
    </div>
  );
};

export default RecentTrans;
