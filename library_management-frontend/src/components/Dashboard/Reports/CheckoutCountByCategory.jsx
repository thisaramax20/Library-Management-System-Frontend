import axios from "../../../api/axios";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(CategoryScale, ArcElement, Title, Tooltip, Legend);

const CheckoutCountByCategory = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchBooksByCategory() {
      try {
        const response = await axios.get(
          "/issue-books/get-checkout-count-by-category"
        );
        if (response.status === 200) setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBooksByCategory();
  }, []);

  const information = {
    labels: data.map((item) => item.category),
    datasets: [
      {
        label: "Number of Books",
        data: data.map((item) => item.count),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Books by Category",
      },
    },
  };
  return (
    <div className="h-96">
      <Doughnut options={options} data={information} />
    </div>
  );
};

export default CheckoutCountByCategory;