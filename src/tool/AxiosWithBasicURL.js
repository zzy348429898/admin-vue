import axios from 'axios';
console.log(process.env.BASIC_URL, '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
export default axios.create({
  baseURL: process.env.BASIC_URL
});
