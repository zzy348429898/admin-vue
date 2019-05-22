<template>
  <div>
    <button @click="getData">get data</button>
    <span>{{axiosData}}</span>
  </div>
</template>

<script>
import axios from 'axios';
let axiosWithConfig = axios.create({
  baseURL: '/api'
});
export default {
  name: 'axiosTest',
  data: function () {
    return {
      axiosData: {}
    };
  },
  methods: {
    getData() {
      axiosWithConfig.get('barChartOption.json').then((data) => { this.axiosData = data; });
    }
  }
};
</script>
