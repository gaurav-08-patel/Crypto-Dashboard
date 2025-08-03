import Layout from "@/components/Layout";
import Portfolio from "./components/Portfolio";
import PriceSection from "./components/PriceSection";
import RecentTrans from "./components/RecentTrans";
import InfoCards from "./components/InfoCards";

const DashBoard = () => {
  return (
    <Layout title="DashBoard">
      <Portfolio />
      <div className="flex gap-5 max-lg:flex-col">
        <PriceSection />
        <RecentTrans />
      </div>
      <InfoCards />
    </Layout>
  );
};

export default DashBoard;
