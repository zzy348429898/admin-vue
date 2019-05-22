<template>
  <echart class="chart" :height="height" :option="option"></echart>
</template>

<script>
import echart from '../echart.vue';
import axios from 'axios';
export default {
  name: 'barChart',
  components: {
    echart
  },
  data() {
    return {
      option: {},
      height: '400px'
    };
  },
  methods: {
    getOption() {
      axios.get('/api/barChartOption.json').then(function(resp) {
        this.option = resp.data;
      }.bind(this));
    }
  },
  mounted() {
    this.getOption();
  }
};
</script>
<style lang="less">
.chart {
  margin: auto;
}
</style>
