<template>
	<div>
		<h1>King Vuepage</h1>
		<test></test>
	</div>
</template>

<style scoped lang="scss">
	div{
		text-align: center;
		width: 600px;
		background-color: red;
		margin: auto;
		padding: 15px;
	}
</style>

<script>
	import test from './test.vue';
	export default{
		created()
		{
			document.title = 'King Vuepack';
		},
		components: {
			test
		}
	}
</script>