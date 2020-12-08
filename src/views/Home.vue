<!--Pages Show All The Games And Leads To Streams-->
<template>
	<main>
		<h2>View Games</h2>
		<!--Row-->
		<section class="row">
			<!--Loop Start-->
			<div class="col-3 mb-4" v-for="game in games">
				<!--Game Item-->
				<article class="card h-100">
					<img :src="game.box.large" class="card-img-top">
					<div class="card-body font-size-xs">
						<div class=""><strong>Game: </strong>{{ game.name }}</div>
						<div class="game-actions">
							<a class="btn-tag btn-primary" :href="`/streams/${game.name}`">View Streams</a>
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
			this.games = await getTopGames()
		}
	}
</script>
