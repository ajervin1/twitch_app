<template>
	<header class="bg-secondary py-3 px-2 rounded shadow-lg">
		<div class="d-flex align-items-center justify-content-between">
			<!--Logo-->
			<div class="">
				<h2 class="text-dark">Twitch App</h2>
			</div>
			<!--Search Form-->
			<div>
				<form class="d-flex" @submit.prevent="handleSearch">
					<input v-model="searchTerm" type="text" class="form-control rounded-right-0"
					       placeholder="Search Channels">
					<button type="submit" class="btn btn-success rounded-left-0">Submit</button>
				</form>
			</div>
			<!--Main Nav-->
			<nav class="nav">
				<a href="/" class="nav-link nav-item">Home</a>
				<a href="" class="nav-link nav-item">Games</a>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	name: "NavBar",
	data () {
		return {
			searchTerm: ''
		}
	},
	methods: {
		handleSearch () {
			this.$router.push ( { path: '/searchResults', query: { term: this.searchTerm } } );
			this.searchTerm = ""
			
		}
	}
}
</script>
