import { Info, ArrowUpToLine, ArrowDownToLine } from "lucide-react";

const Portfolio = () => {
  return (
    <div
      className="mt-4 bg-white rounded-2xl p-4 flex justify-between items-center
        max-lg:flex-col max-lg:items-start max-lg:gap-3"
    >
      <section className="flex gap-12 max-xl:gap-6 max-xsm:gap-3 max-xsm:flex-col">
        <article className="flex flex-col gap-2 max-xsm:gap-0">
          <span
            className="flex text-[14px] max-md:text-[12px] items-center gap-1
              text-gray-600 font-medium"
          >
            Total Portfolio Value <Info size={16} />{" "}
          </span>
          <h1
            id="inr"
            className="text-2xl font-medium max-xl:text-xl max-lg:text-lg
              max-md:text-[16px] max-xsm:text-sm"
          >
            ₹ 112,312.24
          </h1>
        </article>
        <article className="flex flex-col gap-2 max-xsm:gap-0">
          <h1
            className="flex text-[14px] max-md:text-[12px] items-center gap-1
              text-gray-600 font-medium"
          >
            Wallet Balances
          </h1>
          <div className="flex items-center gap-7 max-xl:gap-4">
            <span className="flex items-center gap-1.5">
              <h1
                id="btc"
                className="text-2xl font-medium max-xl:text-xl max-lg:text-lg
                  max-md:text-[16px] max-xsm:text-sm"
              >
                22.3110400
              </h1>
              <label
                htmlFor="btc"
                className="text-[12px] p-0.5 rounded-md font-medium bg-gray-200
                  text-gray-500"
              >
                BTC
              </label>
            </span>
            <span className="flex items-center gap-1.5">
              <h1
                id="inr"
                className="text-2xl font-medium max-xl:text-xl max-lg:text-lg
                  max-md:text-[16px] max-xsm:text-sm"
              >
                ₹ 13,000.00
              </h1>
              <label
                htmlFor="inr"
                className="text-[12px] p-0.5 rounded-md font-medium bg-gray-200
                  text-gray-500"
              >
                INR
              </label>
            </span>
          </div>
        </article>
      </section>
      <section className="flex gap-2">
        <button className="button max-xsm:w-20 max-xsm:text-sm">
          <ArrowDownToLine size={16} />
          Deposit
        </button>
        <button className="button max-xsm:w-20 max-xsm:text-sm">
          <ArrowUpToLine size={16} />
          Withdraw
        </button>
      </section>
    </div>
  );
};

export default Portfolio;
