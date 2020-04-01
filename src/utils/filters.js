import Vue from 'vue'

Vue.filter('arr2Csv', function (arr) {
  return arr.join(', ');
})