<template>
  <main>
    <section>
      <Bar :data="data" :options="options" />
    </section>
    <section>
      <Doughnut :data="data2" :options="options" />
    </section>
  </main>
</template>

<script setup>
import { Bar, Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Social Worker Visits",
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
      data: [3, 5, 2, 7, 4],
    },
  ],
};
const serviceWorkersData = [
  {
    label: "Social Workers",
    value: 30,
    backgroundColor: "rgba(54, 162, 235, 0.5)",
    borderColor: "rgba(54, 162, 235, 1)",
  },
  {
    label: "Counselors",
    value: 20,
    backgroundColor: "rgba(255, 99, 132, 0.5)",
    borderColor: "rgba(255, 99, 132, 1)",
  },
  {
    label: "Therapists",
    value: 25,
    backgroundColor: "rgba(75, 192, 192, 0.5)",
    borderColor: "rgba(75, 192, 192, 1)",
  },
  {
    label: "Case Managers",
    value: 15,
    backgroundColor: "rgba(255, 205, 86, 0.5)",
    borderColor: "rgba(255, 205, 86, 1)",
  },
  {
    label: "Child Advocates",
    value: 10,
    backgroundColor: "rgba(153, 102, 255, 0.5)",
    borderColor: "rgba(153, 102, 255, 1)",
  },
];
const data2 = {
  labels: serviceWorkersData.map((data) => data.label),
  datasets: [
    {
      label: "Service Workers",
      data: serviceWorkersData.map((data) => data.value),
      backgroundColor: serviceWorkersData.map((data) => data.backgroundColor),
      borderColor: serviceWorkersData.map((data) => data.borderColor),
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: space-evenly;
  padding: 2rem;
}
</style>
