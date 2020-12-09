<template>
	<main class="search-results">
		<h2 class="text-secondary pt-4 text-secondary ">Channel Results</h2>
		<hr class="mb-4">
		<section class="results-container">
			<!--Channel Loop-->
			<article class="mb-5 d-flex align-items-center" v-for="channel in channels">
				<!--Logo-->
				<div class="logo col-2">
					<img :src="channel.logo" alt="" class="rounded-circle shadow-lg">
				</div>
				<!--Channel Details-->
				<div class="channel-details text-secondary col-5">
					<h4 class="text-primary">{{ channel.display_name }}</h4>
					<div>{{ channel.description }}</div>
					<div>{{ channel.followers }} Followers</div>
				</div>
				<!--Actions-->
				<div class="actions d-flex justify-content-center">
					<a class="btn btn-primary btn-sm" :href="`/channels/${channel._id}`">
						View Channel
					</a>
				</div>
			</article>
			<!--Loop-->
		</section>
	</main>
</template>

<script>
import { searchChannels } from "../service";

export default {
	name: "SearchResults",
	data () {
		return {
			channels: []
		}
	},
	async created () {
		this.channels = await searchChannels ( this.$route.query.term );
		
	}
}
</script>
