<template>
	<main id="app" class="">
		<NavBar />
		<!--Router view-->
		<router-view></router-view>
	</main>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from "./components/NavBar.vue";

export default Vue.extend( {
	name: 'App',
	components: { NavBar },
	data() {
		return {}
	},
} );
</script>

