<template>
	<main>
		<h2>Channel Videos</h2>
		<!--Channel Videos-->
		<div class="row">
			<div class="col-4 mb-4" v-for="video in videos">
				<article class="" >
					<img :src="video.preview.large" class="img-fluid">
					<div>Video Id: {{ video._id }}</div>
					<div>Url: {{ video.url }}</div>
					<div>BroadCastID: {{ video.broadcast_id }}</div>
					<div class="actions">
						<a class="btn btn-primary btn-sm" :href="`/videos/${video._id}`">View Video</a>
					</div>
				</article>
			</div>
		</div>
		
		<!--Channel Videos-->
	</main>
</template>

<script>
import { getChannelVideos } from "../service";

export default {
	name: "ChannelVideos",
	data () {
		return {
			videos: []
		}
	},
	async created () {
		this.videos = await getChannelVideos ( this.$route.params.channelId );
	}
	
}
</script>
