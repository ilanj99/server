import { Int, Args, Parent, Query, Mutation, Resolver, ResolveField } from '@nestjs/graphql';
// import { forwardRef, Inject } from '@nestjs/common';
import { Song } from '../models/songModel';
import { songService } from '../services/songService';




@Resolver(of => Song)
export class SongResolver {

  constructor(
    private readonly songService: songService,
  ) { }

  // @Query(returns => [Song], { name: 'longSongs', nullable: false })
  // async getSongsLongerThanFiveMins() {
  //   return this.songService.getSongsLongerThanFiveMins();
  // }

  @Query(returns => [Song], { name: 'songsInPlaylist', nullable: false })
  async getSongsInPlaylist(@Args({ name: 'playlistId', type: () => Int}) playlistId: number) {
    return this.songService.getSongsInPlaylist(playlistId);
  }

}