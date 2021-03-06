import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Streams from './views/Streams'

import ChannelDetails from './views/ChannelDetails'
import ChannelVideos from './views/ChannelVideos'
import ChannelClips from './views/ChannelClips'
import ShowStream from './views/ShowStream'
import ShowVideo from './views/ShowVideo'
import SearchResults from "./views/SearchResults";



Vue.use ( Router )


const router = new Router ( {
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/videos/:videoId',
			component: ShowVideo
		},
		{
			path: '/searchResults',
			component: SearchResults
		},
		{
			path: '/stream/:channelName',
			component: ShowStream
		},
		{
			path: '/streams/:game',
			component: Streams
		},
		
		{
			path: '/channels/:channelId',
			component: ChannelDetails
		},
		
		{
			path: '/channels/:channelId/videos',
			component: ChannelVideos
		},
		{
			path: '/channels/:channel_name/clips',
			component: ChannelClips
		}
	]
} )

export default router
