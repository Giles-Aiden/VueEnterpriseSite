<template>
  <div id="chart">
    <Chart type="line" :data="basicData" />
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  props: [
    "dates",
    "sales"
  ],
  data() {
    return {
      basicData: {
        labels: this.dates,
        datasets: [
          {
            label: "Daily Sales",
            data: this.sales,
            fill: false,
            borderColor: "#ffffff",
            color: "#ffffff",
          },
        ],
      },
    };
  },
};
</script>
