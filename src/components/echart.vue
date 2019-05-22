<template>
  <div ref="chart" :style="{height: height}"></div>
</template>

<script>
import echarts from 'echarts';

export default {
  name: 'echart',
  data: function () {
    return {
      chart: null
    };
  },
  props: {
    option: {},
    width: {
      type: String,
      default: '500px'
    },
    height: {
      type: String,
      default: '400px'
    }
  },
  watch: {
    option: function (newO, old) {
      this.setChart();
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.chart);
      this.chart.showLoading();
    },
    setChart() {
      this.chart.hideLoading();
      this.chart.setOption(this.option);
    },
    disposeChart() {
      if (!this.chart) {
        return;
      }
      this.chart.dispose();
      this.chart = null;
    }
  },
  mounted() {
    this.initChart();
  },
  updated() {
    this.setChart();
  }
};
</script>

<style lang="less" scoped>
</style>
