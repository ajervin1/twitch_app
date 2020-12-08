<template>
	<main id="app" class="">
		<h2>Hello world</h2>
		<!--Router view-->
		<router-view></router-view>
	</main>
</template>

<script lang="ts">
	import Vue from 'vue';
	
	export default Vue.extend({
		name: 'App',
		data() {
			return {}
		},
	});
</script>

