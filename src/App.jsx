import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

const App = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold p-3.5">Basic Charts</h1>
      <div className="flex justify-around">
        <div className="w-[720px]">
          <LineChart />
          <BarChart />
        </div>
        <div className="w-[450px]">
          <PieChart />
          <DoughnutChart />
        </div>
      </div>
    </>
  );
};

export default App;
