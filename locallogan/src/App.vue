<template>
	<div>
		<div id="app">
			<Navbar></Navbar>
			<section class="hero">
				<h1>Local</h1>
				<h1 class="ml-20">Logan</h1>
			</section>
		</div>
		<div class="footer">
			<h4>Contact us - </h4>
		</div>
	</div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
	components: {
		Navbar
	},
	data() {
		return {}
	},
	mounted() {
		document.title = 'LocalLogan - Home';
	}
}
</script>

<style>
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
	width: 100vw;
	height: 100vh;
	background: url(./assets/Map.png) center center / cover no-repeat;
}

.hero {
	background-color: #49723F;
	color: black;
	height: 400px;
	max-width: 900px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
  top: 20vh;
	border-radius: 3px;
	margin-left: -5px;
}

.hero>h1 {
	font-size: 6rem;
	padding-left: 40px;
}

.footer {
	background-color: #49723F;
	height: 100%;
}

@media only screen and (max-width: 1024px) {
	.hero {
		max-width: 500px;
		height: 200px;
	}
	.hero>h1 {
		font-size: 4rem;
	}	
}
</style>
