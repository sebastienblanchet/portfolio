import Vue from 'vue'

Vue.filter('arr2Csv', function (arr) {
  return arr.join(', ');
})

Vue.filter('title', function (str) {
  return str.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
})