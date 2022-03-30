<template>
	<div>
		<Navbar></Navbar>
		<h1 class="text-center">Coming soon!</h1>
		<p class="text-center">The best restaurants in Logan - all in one place! </p>
	</div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'Restaurants',
	components: {
		Navbar
	},
	created() {
		document.title = "Restaurants - LocalLogan";
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1 {
		margin-top: 1rem;
	}
</style>