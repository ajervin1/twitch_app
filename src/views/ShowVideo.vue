<template>
	<main>
		<h2>Show Video</h2>
		<!--Show Twitch Video-->
		<div id="twitch-embed"></div>
	</main>
</template>

<script>
	export default {
		name: 'ShowVideo',
		mounted () {
			new Twitch.Embed("twitch-embed", {
				width: 854,
				height: 480,
				
				video: this.$route.params.videoId,
				// only needed if your site is also embedded on embed.example.com and othersite.example.com
				parent: ["embed.example.com", "othersite.example.com"]
			});
		}
	}
</script>
