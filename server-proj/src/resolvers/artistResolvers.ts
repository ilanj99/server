import { Int, Args, Parent, Query, Mutation, Resolver, ResolveField } from '@nestjs/graphql';
import { Artist } from '../models/artistModel';
import { artistService } from '../services/artistService';
import { forwardRef, Inject, Post } from '@nestjs/common';


@Resolver(of => Artist)
export class ArtistResolver {
  constructor(
    private readonly artistService: artistService,
  ) { }

  @Query(returns => [Artist], { name: 'allArtists', nullable: false })
  async getAllArtists() {
    return this.artistService.getAll();
  }

  @Query(returns => [Artist], { name: 'artistsBornInYear', nullable: false })
  async getArtistsBornInYear(@Args({ name: 'year', type: () => Int }) year: number) {
    return this.artistService.getArtistsBornInYear(year);
  }

  @Query(returns => Artist, { name: 'artistWithMostTracksInPlaylist', nullable: true })
  async getArtistWithMostTracksInPlaylist(@Args({ name: 'playlistId', type: () => Artist }) playlistId: number) {
    return this.artistService.getArtistWithMostTracksInPlaylist(playlistId);
  }

  @Mutation(returns => Post)
  async addArtist(
    @Args({name: 'artistId', type: () => Number}) artistId: number,
    @Args({name: 'artistName', type: () => String}) artistName: string,
    @Args({name: 'artistBirthyear', type: () => Number}) artistBirthyear: number,
    @Args({name: 'artistBirthplace', type: () => String}) artistBirthplace: string,
    ){
      return this.artistService.addArtist(artistId, artistName, artistBirthyear, artistBirthplace);
    }
}
