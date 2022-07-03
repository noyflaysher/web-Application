import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import "./Charts.css";
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["My Recipes", "Other Recipes"],
  datasets: [
    {
      label: "# of Recipes",
      data: [3, 8],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return <Pie data={data} />;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const data2 = {
  labels: ["Spicy", "Vegaterian", "Vegan", "Dairy", "Glutten-free"],
  datasets: [
    {
      label: "Identifiers",
      data: [2, 0, 1, 0, 0],
      backgroundColor: "rgba(75, 192, 192, 0.7)",
    },
  ],
};

export function BarChart() {
  return <Bar data={data2} />;
}

function Charts() {
  return (
    <>
      <div className="bar-container">
        <BarChart />
      </div>
      <div className="pie-container">
        <PieChart />
      </div>
    </>
  );
}

export default Charts;
