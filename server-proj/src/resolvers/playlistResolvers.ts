import { Int, Args, Parent, Query, Mutation, Resolver, ResolveField } from '@nestjs/graphql';
import { Playlist } from '../models/playlistModel';
import { playlistService } from '../services/playlistService';

@Resolver(of => Playlist)
export class PlaylistResolver {

	constructor(
		private readonly playlistService: playlistService,
	) {}

	@Query(returns => [Playlist], { name: 'getPlaylistsWithSong', nullable: false })
	async getPlaylistsWithSong(@Args({ name: 'songName', type: () => String}) songName: string) {
		return this.playlistService.getPlaylistsWithSong(songName);
	}

	@Query(returns => [Playlist], { name: 'getAllPlaylists', nullable: false })
	async getAllPlaylists() {
		return this.playlistService.getAllPlaylists();
	}

}
 