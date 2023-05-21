import { Int, Args, Parent, Query, Mutation, Resolver, ResolveField } from '@nestjs/graphql';
import { playlistSongsService } from '../services/playlistSongsService';
import { PlaylistSongs } from 'src/models/playlistSongsModel';

@Resolver(of => PlaylistSongs)
export class PlaylistSongsResolver {

  // constructor(
  //   private readonly playlistSongsService: playlistSongsService,
  // ) { }


}