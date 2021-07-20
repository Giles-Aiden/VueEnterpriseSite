<template>
  <div
    id="chart"
    @loadstart="document.getElementById('salesChart').style.height = '50vh'"
  >
    <div class="card" style="height: 50vh">
      <Chart
        type="bar"
        :data="basicData"
        :options="basicOptions"
        id="salesChart"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  props: ['dates', 'sales'],
  data() {
    return {
      basicData: {
        labels: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        datasets: [
          {
            label: 'Sales',
            backgroundColor: '#113F70',
            data: [65, 59, 80, 81, 56, 55, 40],
          },
        ],
      },
      basicOptions: {
        responsive: true,
        maintainAspectRatio: false,
        /*         plugins: {
          legend: {
            labels: {
              display: true,
              font: {
                size: 40
              }
            },
          },
        }, */
        legend: {
          position: 'bottom',
          labels: {
            fontSize: 20,
            fontColor: 'white',
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                fontSize: 15,
                fontColor: 'white',
                beginAtZero: true,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontSize: 15,
                fontColor: 'white',
              },
            },
          ],
        },
      },
    };
  },
  mounted() {
    document.getElementById('salesChart').style.height = '50vh';
  },
};
</script>
