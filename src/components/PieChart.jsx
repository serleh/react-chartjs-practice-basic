import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
const PieChart = () => {
  const data = {
    labels: ["Laptops", "Desktops", "Monitors", "Gpus"],
    datasets: [
      {
        label: "Distribution of products",
        data: [10, 33, 44, 80],
        backgroundColor: [
          "rgba(255,99,132,0.6)",
          "rgba(54,162,235,0.6)",
          "rgba(255,206,86,0.6)",
          "rgba(75,192,192,0.6)",
        ],
        borderColor: [
          "rgba(255,99,132,0.6)",
          "rgba(54,162,235,0.6)",
          "rgba(255,206,86,0.6)",
          "rgba(75,192,192,0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Product Distribution by Sales (%)",
      },
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}:${context.parsed}%`;
          },
        },
      },
    },
  };
  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
