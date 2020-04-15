import Vue from 'vue'

Vue.filter('dateString', (val: string) => new Date(val).toDateString())
