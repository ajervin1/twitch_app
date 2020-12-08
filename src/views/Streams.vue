<!--Show All Streams Lead To Show Stream Pass Channel Name-->
<template>
	<main>
		<h2>List Streams</h2>
		<!--Row-->
		<section class="row">
			<!--Loop Start-->
			<div class="col-4 mb-4" v-for="stream in streams">
				<!--Stream Item-->
				<article class="card h-100">
					<img :src="stream.preview.medium" class="card-img-top">
					<div class="card-body font-size-xs">
						<div class="mb-2 d-flex justify-content-between align-items-center">
							<div class="">
								<strong>Game: </strong>
								{{ stream.game }}
							</div>
							<div class="">
								<span class="badge badge-danger" >{{ stream.stream_type }}</span>
							</div>
						</div>
					
						<!--Channel-->
						<div class="channel d-flex mb-3 align-items-center">
							<div class="channel-left pr-2">
								<img  :src="stream.channel.logo" class="channel-logo rounded-circle" />
							</div>
							<div class="right">
								<div class="font-weight-bold">{{ stream.channel.status }}</div>
								<div>{{ stream.channel.name }}</div>
							</div>
						</div>
						<!--Channel-->
						<div class="actions">
							<a class="btn btn-primary btn-sm"
							   :href="`/stream/${stream.channel.name}`">
								View Stream
							</a>
						</div>
					</div>
				
				</article>
				<!--Stream Item-->
			</div>
			<!--Loop End-->
		</section>
	</main>
</template>

<script>
	import { getStreamsByGame } from '../service'
	
	export default {
		name: 'Stream',
		data () {
			return {
				streams: []
			}
		},
		async created () {
			this.streams = await getStreamsByGame(this.$route.params.game)
		}
	}
</script>
<style>
	.channel-logo {
		width: 4rem;
		height: 4rem;
	}
</style>
