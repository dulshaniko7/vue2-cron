<template>
  <div id="app">
    <div class="getting-started-light">
      <CronLight v-model="value" @error="error=$event"></CronLight>
      <div class="mt-2 grey--text text--darken-1">cron expression: {{value}}</div>
    </div>

  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  props: {
    init: {
      type: String,
      default: '30 12,19 24 12 *'
    }
  },

  data() {
    return {
      value: this.init,
      error: ''
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
