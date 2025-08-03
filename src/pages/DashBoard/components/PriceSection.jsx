import { ArrowUpRight, CirclePlus, CircleMinus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PriceSection = () => {
  return (
    <div className="p-4 bg-white rounded-2xl flex-1/2">
      <section className="flex justify-between h-fit">
        <article className="flex flex-col gap-2 max-xsm:gap-0">
          <h1
            className="flex text-[14px] max-md:text-[12px] items-center gap-1
              text-gray-600 font-medium"
          >
            Current Price
          </h1>
          <div className="flex items-end gap-7 max-xl:gap-4">
            <span className="flex items-center gap-1.5">
              <h1
                id="btc"
                className="text-2xl font-medium max-xl:text-xl max-lg:text-lg
                  max-md:text-[16px] max-xsm:text-sm"
              >
                ₹ 24601.40
              </h1>
              <label
                htmlFor="btc"
                className="text-[12px] rounded-md font-medium text-[#059669]
                  flex justify-center items-center"
              >
                <ArrowUpRight size={15} /> 0.04%
              </label>
            </span>
          </div>
        </article>
        <article className="flex gap-2">
          <button className="flex gap-1 p-2 button w-15 h-7">
            <CirclePlus size={15} />
            Buy
          </button>
          <button className="flex gap-1 p-2 button w-15 h-7">
            <CircleMinus size={15} />
            Sell
          </button>
        </article>
      </section>
      <section className="mt-2.5">
        <Tabs defaultValue="1D" className="w-full">
          <TabsList className="relative ml-auto">
            {["1H", "1D", "1W", "1M"].map((item) => (
              <TabsTrigger
                key={item}
                value={item}
                className="data-[state=active]:text-black text-gray-600 p-1.5
                  text-[12px] cursor-pointer  "
              >
                {item}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="1H" className="">
            <div id="graph  " className="">
              <img src="/Vector 26.png" alt="statistics" className="w-full" />
            </div>
            <div className="flex justify-between mt-1 text-[10px] text-gray-500">
              {["7:15 AM", "7:25 AM", "7:35 AM", "7:55 AM"].map((time) => (
                <span key={time}>{time}</span>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="1D" className="">
            <div id="graph  " className="">
              <img src="/Graph.png" alt="statistics" className="w-full" />
            </div>
            <div className="flex justify-between mt-1 text-[10px] text-gray-500">
              {["7:15 AM", "8:15 AM", "9:15 AM", "10:15 AM"].map((time) => (
                <span key={time}>{time}</span>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="1W" className="">
            <div id="graph  " className="">
              <img src="/Vector 27.png" alt="statistics" className="w-full" />
            </div>
            <div className="flex justify-between mt-1 text-[10px] text-gray-500">
              {["Sun", "Tue", "Wed", "Fri"].map((time) => (
                <span key={time}>{time}</span>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="1M" className="">
            <div id="graph  " className="">
              <img src="/Graph.png" alt="statistics" className="w-full" />
            </div>
            <div className="flex justify-between mt-1 text-[10px] text-gray-500">
              {["Jan", "April", "June", "Sept"].map((time) => (
                <span key={time}>{time}</span>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default PriceSection;
