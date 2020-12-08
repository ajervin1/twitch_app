import axios from 'axios';

const client_id = "mfytj1f03ko0k4uloqw0tgiusjkjqq"
// Default
axios.defaults.baseURL = 'https://api.twitch.tv/kraken';
axios.defaults.headers.common[ 'Accept' ] = `application/vnd.twitchtv.v5+json`;
axios.defaults.headers.common[ 'Client-ID' ] = client_id
axios.defaults.params = {}
axios.defaults.params[ 'limit' ] = 8;


// Requests
// Get Top Games Home Page
export async function getTopGames() {
	let { data: { top: games } } = await axios.get('/games/top');
	games = games.map(game => game.game);
	console.log(games)
	return games
}

// Get Streams By Game
export async function getStreamsByGame(game = "") {
	const { data: { streams } } = await axios.get('/streams', {
		params: {
			game
		}
	});
	console.log(streams)
	return streams;
}

// SearchChannels
export async function searchChannels(query) {
	const { data: { channels } } = await axios.get('/search/channels', {
		params: {
			query,
		}
	});
	console.log(channels)
	return channels
}

// GetChannelById
export async function getChannelById(channelId = "100484450") {
	const { data: channel } = await axios.get(`/channels/${ channelId }`);
	console.log(channel)
	return channel
}

// Get Channel Videos
export async function getChannelVideos(channelId = "100484450", sort_by = 'time') {
	const sort_options = [ 'time', 'views' ];
	const { data: { videos } } = await axios.get(`/channels/${ channelId }/videos`, {
		params: {
			// Sort By Time Or views
			sort: sort_by,
		}
	});
	console.log(videos)
	return videos
}

// Get Channel Clips
export async function getChannelClips(channelname = 'stpeach', period = 'week') {
	// Filter Options
	const filters = [ "day", "week", "month", "all" ]
	const { data: { clips } } = await axios.get('/clips/top', {
		params: {
			channel: channelname,
			// Filter by day week month or all
			limit: 4,
			period: period
		}
	});
	return clips
	console.log(clips);
	
}



