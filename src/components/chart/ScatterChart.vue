<template>
  <echart class="chart" :height="height" :option="option"></echart>
</template>

<script>
import echart from '../echart.vue';
import echarts from 'echarts';
import axios from '../../tool/AxiosWithBasicURL.js';

let option = {
  // backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
  //   offset: 0,
  //   color: '#f7f8fa'
  // },
  // {
  //   offset: 1,
  //   color: '#cdd0d5'
  // }]),
  title: {
    text: '1990 与 2015 年各国家人均寿命与 GDP'
  },
  legend: {
    right: 10,
    data: ['1990', '2015']
  },
  xAxis: {
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    }
  },
  yAxis: {
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    },
    scale: true
  },
  series: [{
    name: '1990',
    data: undefined,
    type: 'scatter',
    symbolSize: function (data) {
      return Math.sqrt(data[2]) / 5e2;
    },
    label: {
      emphasis: {
        show: true,
        formatter: function (param) {
          return param.data[3];
        },
        position: 'top'
      }
    },
    itemStyle: {
      normal: {
        shadowBlur: 10,
        shadowColor: 'rgba(120, 36, 50, 0.5)',
        shadowOffsetY: 5,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
          offset: 0,
          color: 'rgb(251, 118, 123)'
        }, {
          offset: 1,
          color: 'rgb(204, 46, 72)'
        }])
      }
    }
  }, {
    name: '2015',
    data: undefined,
    type: 'scatter',
    symbolSize: function (data) {
      return Math.sqrt(data[2]) / 5e2;
    },
    label: {
      emphasis: {
        show: true,
        formatter: function (param) {
          return param.data[3];
        },
        position: 'top'
      }
    },
    itemStyle: {
      normal: {
        shadowBlur: 10,
        shadowColor: 'rgba(25, 100, 150, 0.5)',
        shadowOffsetY: 5,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
          offset: 0,
          color: 'rgb(129, 227, 238)'
        }, {
          offset: 1,
          color: 'rgb(25, 183, 207)'
        }])
      }
    }
  }]
};
export default {
  name: 'scatterChart',
  components: {
    echart
  },
  data() {
    return {
      option: option,
      height: '400px'
    };
  },
  methods: {
    getOption() {
      axios.get('/api/scatterChartData.json').then(function (resp) {
        this.option.series[0].data = resp.data[0];
        this.option.series[1].data = resp.data[1];
        this.option = { ...this.option };
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
