<template>
	<main>
		<!--Channel Details-->
	
		<!--Channel-->
		<article class="channel no-gutters align-items-center d-flex py-4">
			<div class="col-2 pr-4 mr-4">
				<img :src="channel.logo" class="rounded-circle img-fluid">
			</div>
			<!--Channel Details-->
			<div class="channel-details text-white mr-auto">
				<div class="font-weight-normal display-4 text-primary">{{ channel.display_name }}
				</div>
				<div>Followers: {{ channel.followers }}</div>
				<div>{{ channel.description }}</div>
			</div>
			<!--Filter Options-->
			<div class="d-flex align-items-center col-4">
				<label class="text-white pr-2">Filter Media</label>
				<select class="form-control w-75" v-model="filterBy">
					<option value="" selected disabled>Select Media</option>
					<option value="clips">clips</option>
					<option value="videos">videos</option>
				</select>
			</div>
		</article>
		<!--Channel-->
		
		<!--Media List-->
		<VideoList v-if="filterBy === 'videos'"></VideoList>
		<ClipList v-if="filterBy === 'clips'"></ClipList>
		<!--Media List-->
	</main>
</template>

<script>
	import { getChannelById } from '../service'
	import VideoList from '../components/VideoList'
	import ClipList from '../components/ClipList'
	
	export default {
		name: 'ChannelDetails',
		components: { ClipList, VideoList },
		data () {
			return {
				channel: null,
				filterBy: 'videos'
			}
		},
		async created () {
			this.channel = await getChannelById(this.$route.params.channelId)
		}
	}
</script>
<style>
	.profile-banner {
		height: 300px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
