<template>
  <echart class="chart" :height="height" :option="option"></echart>
</template>

<script>
import echart from '../echart.vue';
import axios from '../../tool/AxiosWithBasicURL.js';
export default {
  name: 'pieChart',
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
      axios.get('/api/pieChartOption.json').then(function(resp) {
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
