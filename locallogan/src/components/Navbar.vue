<template>
		<div class="nav">
			<div class="logo-container">
				<img src="../assets/logo-white.png" alt="">
			</div>
			<div class="links-container">
				<ul class="flex gap-4">
					<li><a href="#">Home</a></li>
					<li><a href="#">Coming Soon</a></li>
					<!-- Contact, About Us, Our Team, etc. -->
					<li><a href="#">Coming Soon</a></li>
					<li><a href="#">Coming Soon</a></li>
				</ul>
			</div>
		</div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
	background-color: #49723F;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.nav>.logo-container {
	padding: 1rem;
}
.nav>.logo-container>img {
	height: 75px;
}
.nav>.links-container {
	padding: 1rem;
}
.nav>.links-container>ul>li>a {
	color: black;
	text-decoration: none;
	cursor: pointer;
	transition: 0.4s all;
}
.nav>.links-container>ul>li {
	transition: 0.4s all;
}
.nav>.links-container>ul>li:hover {
	transform: translateY(-2px);
	transition: 0.4s all;
}
@media only screen and (max-width: 1024px) {
	.links-container>ul {
		gap: 1rem !important;
	}
}

@media only screen and (max-width: 550px) {
	.logo-container {
		margin: 0 auto;
	}
	.links-container {
		margin: 0 auto;
	}
}
</style>
