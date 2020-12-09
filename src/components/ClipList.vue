<template>
	<main>
		<h2>Channel Clips</h2>
		
		<!--Actions-->
		<section class="actions mb-4">
			<label class="text-white pr-2">Sort By</label>
			<select class="" v-model="selectedPeriod">
				<option :value="period" v-for="period in options">{{ period }}</option>
			</select>
		</section>
		
		<!--Clips List-->
		<section class="row">
			<div class="mb-4 col-4" v-for="clip in clips">
				<article class="h-100 bg-secondary rounded shadow-lg">
					<iframe
							:src="`${clip.embed_url}&parent=localhost`"
							width="340"
							height="250"
							allowfullscreen
							scrolling="no"
					>
					</iframe>
					<div class="p-4">
						<div><strong>Title: </strong>{{ clip.title }}</div>
						<div><strong>Views: </strong>{{ clip.views }}</div>
						<div><strong>Game: </strong>{{ clip.game}}</div>
						<div><strong>Created: </strong>{{ clip.created_at | formatDate}}</div>
					</div>
				
				</article>
			</div>
		</section>
		<!--Clips List-->
	</main>
</template>

<script>
	import { getChannelClips } from '../service'
	import moment from 'moment'
	
	export default {
		name: 'ClipList',
		data () {
			return {
				clips: [],
				// Selected Period
				selectedPeriod: 'all',
				options: {
					day: 'day',
					week: 'week',
					month: 'month',
					all: 'all'
				}
			}
		},
		methods: {
			async fetchClips () {
				this.clips = await getChannelClips(this.$route.params.channel_name, this.selectedPeriod)
			},
			changePeriod (period) {
				this.selectedPeriod = period
			}
		},
		watch: {
			async selectedPeriod (newvalue) {
				this.clips = await getChannelClips(this.$route.params.channel_name, newvalue)
			}
		},
		async created () {
			// Initial Requesst
			this.fetchClips()
		},
		filters: {
			formatDate (date) {
				return moment(date).fromNow()
			}
		}
	}
</script>
