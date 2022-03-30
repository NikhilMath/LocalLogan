<template>
	<div>
		<router-view />
	</div>
</template>

<script>

export default {
  name: 'App',
	mounted() {
		document.title = 'LocalLogan';
	}
}
</script>

<style>

</style>
