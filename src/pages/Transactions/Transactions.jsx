import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Download } from "lucide-react";
import TableContainer from "./components/Table";

const Transactions = () => {
  return (
    <Layout title="Transactions">
      <div className=" my-12">
        <button className="button ml-auto mb-3  min-w-fit">
          <Download size={18} /> Export CSV
        </button>
        <article className="p-4 bg-white rounded-2xl">
          <Tabs defaultValue="All" className="w-full">
            <div className="flex justify-between max-md:flex-col-reverse max-md:gap-2">
              <TabsList className="bg-transparent">
                {["All", "Deposit", "Withdraw", "Trade"].map((item) => (
                  <TabsTrigger
                    key={item}
                    value={item}
                    className="mx-4 min-w-3 max-md:min-w-1 max-md:mx-1 max-md:text-sm  text-gray-400 data-[state=active]:text-black data-[state=active]:after:rounded-2xl  cursor-pointer relative data-[state=active]:shadow-none data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:-bottom-[13px] data-[state=active]:after:w-full data-[state=active]:after:h-1 data-[state=active]:after:bg-[#5F00D9]  "
                  >
                    {item}
                  </TabsTrigger>
                ))}
              </TabsList>

              <Input
                className=" w-[200px] max-md:w-[220px]"
                placeholder="Search by ID or destination"
              />
            </div>
            <hr className="w-full" />
            <TabsContent value="All" className="">
              <TableContainer />
            </TabsContent>
            <TabsContent value="Deposit" className="">
              <h1 className="mt-4">Deposit Table Will be here</h1>
            </TabsContent>
            <TabsContent value="Withdraw" className="">
              <h1 className="mt-4">Withdraw Table Will be here</h1>
            </TabsContent>

            <TabsContent value="Trade" className="">
              <h1 className="mt-4">Trade Table Will be here</h1>
            </TabsContent>
          </Tabs>
        </article>
      </div>
    </Layout>
  );
};

export default Transactions;
