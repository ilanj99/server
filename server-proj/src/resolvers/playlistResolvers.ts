import { Int, Args, Parent, Query, Mutation, Resolver, ResolveField } from '@nestjs/graphql';
import { Playlist } from '../models/playlistModel';
import { playlistService } from '../services/playlistService';

@Resolver(of => Playlist)
export class PlaylistResolver {

	// constructor(
	// 	private readonly playlistService: playlistService,
	// ) { }

	// @Query(returns => [Playlist], { name: 'Playlists', nullable: false })
	// async getplaylistsWithSong(@Args({ name: 'playlistsWithSong', type: () => [Playlist]}) songId: number) {
	// 	return this.playlistService.getPlaylistsWithSong(songId);
	// }

}
 