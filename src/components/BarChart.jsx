import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales for 12 months",
        data: [50, 100, 13, 90, 0, 12, 55, 99, 200, 77, 44, 200],
        backgroundColor: [
          "rgba(255,99,132,0.2)",
          "rgba(54,162,235,0.2)",
          "rgba(255,206,86,0.2)",
          "rgba(75,192,192,0.2)",
          "rgba(153,102,255,0.2)",
          "rgba(255,159,64,0.2)",
          "rgba(199,199,199,0.2)",
          "rgba(83,102,255,0.2)",
          "rgba(255,102,102,0.2)",
          "rgba(102,255,178,0.2)",
          "rgba(255,255,102,0.2)",
          "rgba(102,178,255,0.2)",
        ],
        borderColor: "rgba(0,0,0,0.2)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Monthly Sales Overview",
      },
    },
    tooltip: {
      callback: {
        label: function (context) {
          return `Sales: $${context.parsed.y}`;
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
