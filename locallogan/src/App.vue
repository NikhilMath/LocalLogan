<template>
  <div class="m-8" id="app">
		<img src="./assets/black.png" style="margin: 0 auto;" alt="LocalLogan Logo" width="150">
		<h1 class="text-center">Hey there! We're under construction - but will be back soon with some great new features to improve the qualify of life for the citizens of Logan and the greater Cache Valley area.</h1>
		<h5 class="text-center mt-4">Questions? <a href="mailto:erulemath@gmail.com">Email us</a>!</h5>
		<!-- <Navbar></Navbar> -->
		<!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    // Home,
		// Navbar,
		// Activities,
		// Creators,
		// DateIdeas,
		// Restaurants
  },
	data() {
		return {
			msg: "I'm centered"
		}
	},
	mounted() {
		document.title = 'LocalLogan - Home';
	}
}
</script>

<style>
/* 
	TODO: 
	1. Mess with some quick designs in Figma
	2. Create components to match previous pages 

*/

*, *::before, *::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
