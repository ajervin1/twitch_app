<template>
	<main>
		<div class="clip-details-top d-flex align-items-center justify-content-between">
			<h2 class="text-white">Channel Clips</h2>
			<!--Sort By Option-->
			<section class="actions mb-4 d-flex w-25 align-items-center">
				<label class="text-white pr-3">Sort By</label>
				<select class="form-control w-75" v-model="selectedPeriod">
					<option :value="period" v-for="period in options">{{ period }}</option>
				</select>
			</section>
			<!--Sort By-->
		</div>

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
						<div><strong>Game: </strong>{{ clip.game }}</div>
						<div><strong>Created: </strong>{{ clip.created_at | formatDate }}</div>
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
			selectedPeriod: 'week',
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
			this.clips = await getChannelClips ( this.$route.params.channel_name, this.selectedPeriod )
		},
		changePeriod ( period ) {
			this.selectedPeriod = period
		}
	},
	watch: {
		async selectedPeriod ( newvalue ) {
			this.clips = await getChannelClips ( this.$route.params.channel_name, newvalue )
		}
	},
	async created () {
		// Initial Requesst
		this.fetchClips ()
	},
	filters: {
		formatDate ( date ) {
			return moment ( date ).fromNow ()
		}
	}
}
</script>
