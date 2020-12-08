<template>
	<main>
		<h2>Search Page</h2>
		<!--Search Form-->
		<form class="mb-3 w-50 mx-auto" @submit.prevent="handleSerch">
			<label>Search Channels</label>
			<input type="text" class="form-control mb-3" v-model="term">
			<button class="btn btn-primary">Search</button>
		</form>
		<!--Search Form-->
		
		<h4>Search Results</h4>
		<!--Search Results-->
	
		<div class="list-group">
			<div class="list-group-item d-flex" v-for="channel in results">
				<div class="image-container col-2 mr-4">
					<img :src="channel.logo" class="img-fluid rounded-circle">
				</div>
				<div class="channel-metadata mr-auto">
					<div><strong>{{ channel.display_name }}</strong></div>
					<div><strong>Followers: </strong>{{ channel.followers }}</div>
					<p>
						{{ channel.description }}
					</p>
					<a :href="`/channels/${channel._id}`" class="btn btn-primary">View Channel</a>
				</div>
				<div class="align-self-center">
					<button class="btn btn-primary">Follow</button>
					<button class="btn btn-success">Notifications</button>
				</div>
			</div>
		</div>
		<!--Search Results-->
	</main>
</template>

<script>
	import { searchChannels } from '../service'
	
	export default {
		name: 'SearchPage',
		data () {
			return {
				term: 'stpeach',
				results: []
			}
		},
		methods: {
			async handleSerch () {
				this.results = await searchChannels(this.term)
			}
		},
		
	}
</script>
<style>
	h2, h4, h6 {
		color: white;
	}
</style>
