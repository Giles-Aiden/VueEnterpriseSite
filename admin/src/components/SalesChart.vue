<template>
  <div id="chart">
    <div class="card">
      <Chart type="bar" :data="basicData" :options="basicOptions" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  props: ["dates", "sales"],
  data() {
    return {
      basicData: {
          labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          datasets: [
              {
                  label: 'Sales',
                  backgroundColor: '#113F70',
                  data: [65, 59, 80, 81, 56, 55, 40],
              }
          ]
      },
      basicOptions: {
        plugins: {
          legend: {
            labels: {
              display: true,
              color: "rgb(255, 99, 132)",
            },
          },
        },
      },
    };
  },
};
</script>
