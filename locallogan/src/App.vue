<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
*,*::before,*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
