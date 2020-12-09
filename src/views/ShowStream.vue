<template>
	<main>
		<h2 class="text-white py-3">Show Stream</h2>
		<!-- Add a placeholder for the Twitch embed -->
		<div id="twitch-embed">
		
		</div>
	</main>
</template>

<script>
	export default {
		name: 'ShowStream',
		mounted () {
			new Twitch.Embed("twitch-embed", {
				width: 854,
				height: 480,
				channel: this.$route.params.channelName,
				// only needed if your site is also embedded on embed.example.com and othersite.example.com
				parent: ["embed.example.com", "othersite.example.com"]
			});
		}
	}
</script>
