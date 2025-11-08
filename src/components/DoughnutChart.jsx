import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  const data = {
    labels: ["Chrome", "Safari", "Firefox", "Edge"],
    datasets: [
      {
        label: "Browser usage",
        data: [40, 33, 80, 6],
        backgroundColor: [
          "rgba(255,99,132,0.6)",
          "rgba(54,162,235,0.6)",
          "rgba(255,206,86,0.6)",
          "rgba(75,192,192,0.6)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(75,192,192,1)",
        ],
      },
    ],
    borderWidth: 1,
    hoverOffset: 4,
  };

  const centerTextPlugin = {
    id: "centerText",
    afterDraw(chart) {
      const {
        ctx,
        chartArea: { width, height },
      } = chart;
      ctx.save();
      ctx.font = "bold 18px sans-serif";
      ctx.fillStyle = "#333";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const total = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
      ctx.fillText(`Total:${total}`, width / 2, height / 2 + 10);
    },
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Distribution of browser usage",
      },
      legend: {
        position: "bottom",
      },
    },
    cutout: "50%",
  };
  return (
    <div>
      <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
    </div>
  );
};

export default DoughnutChart;
