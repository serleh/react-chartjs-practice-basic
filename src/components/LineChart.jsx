import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Temperature reading in Celcius",
        data: [20, 11, 33, 99, 44, 10, 44],
        pointStyle: "circle",
        pointBackgroundColor: "rgba(200,100,20,0.1)",
        borderColor: "rgba(255,99,132,0.2)",
        backgroundColor: "rgba(255,99,132,0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Weekly Temperature",
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
