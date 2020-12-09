<!--Pages Show All The Games And Leads To Streams-->
<template>
	<main class="">
		<h2 class="text-secondary py-4">View Games</h2>
		<!--Row-->
		<section class="row">
			<!--Loop Start-->
			<div class="col-3 mb-4" v-for="game in games">
				<!--Game Item-->
				<article class="card h-100">
					<img :src="game.box.large" class="game-image card-img-top shadow-sm">
					<div class="card-body font-size-sm">
						<div class="font-weight-bold mb-2">{{ game.name }}</div>
						<div class="game-actions">
							<a class="btn btn-primary btn-sm" :href="`/streams/${game.name}`">View Streams</a>
						</div>
					</div>
				
				</article>
				<!--Game Item-->
			</div>
			<!--Loop End-->
		</section>
	</main>
</template>

<script>
import { getTopGames } from '../service'

export default {
	name: 'Home',
	data () {
		return {
			games: []
		}
	},
	async mounted () {
		this.games = await getTopGames ()
	}
}
</script>
<style>


.game-image {
	height: 275px;
	max-width: 100%;
}

</style>