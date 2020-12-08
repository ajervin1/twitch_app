<template>
	<main>
		<h2>Channel Videos</h2>
		<div class="w-25 mb-4 d-flex align-items-center">
			<label class="text-white pr-2">
				Sort By
			</label>
			<select class="form-control w-75" v-model="sortBy">
				<option value="time">Date</option>
				<option value="views">Popular</option>
			</select>
		</div>
		<!--Channel Videos-->
		<div class="row">
			<div class="col-4 mb-4 font-size-sm" v-for="video in videos">
				<article class="bg-secondary rounded shadow-lg">
					<img :src="video.preview.large" class="img-fluid">
					<div class="video-body p-4">
						<div><strong>{{ video.title }}</strong></div>
						<div>{{ video.game }}</div>
						<div>Views: {{ video.views }}</div>
						
						<div class="actions">
							<a class="btn btn-primary btn-sm" :href="`/videos/${video._id}`">View
								Video</a>
						</div>
					</div>
				
				</article>
			</div>
		</div>
		
		<!--Channel Videos-->
	</main>
</template>

<script>
	import { getChannelVideos } from '../service'
	
	export default {
		name: 'VideoList',
		data () {
			return {
				videos: [],
				sortBy: 'time'
			}
		},
		async created () {
			this.videos = await getChannelVideos(this.$route.params.channelId, this.sortBy);
		},
		watch: {
			async sortBy (newval) {
				this.videos = await getChannelVideos(this.$route.params.channelId, this.sortBy);
			}
		}
		
	}
</script>
