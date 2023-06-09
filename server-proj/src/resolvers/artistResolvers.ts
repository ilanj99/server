import { Int, Args, Parent, Query, Mutation, Resolver, ResolveField } from '@nestjs/graphql';
import { Artist } from '../models/artistModel';
import { artistService } from '../services/artistService';
import { forwardRef, Inject, Post } from '@nestjs/common';

@Resolver(of => Artist)
export class ArtistResolver {

  constructor(
    private readonly artistService: artistService,
  ) {}

  @Query(returns => [Artist], { name: 'allArtists', nullable: false })
  async getAllArtists() {
    return this.artistService.getAll();
  }

  @Query(returns => [Artist], { name: 'artistsBornInYear', nullable: true })
  async getArtistsBornInYear(@Args({ name: 'year', type: () => Int }) year: number) {
    return this.artistService.getArtistsBornInYear(year);
  }

  @Query(returns => Artist, { name: 'artistWithMostTracksInPlaylist', nullable: true })
  async getArtistWithMostTracksInPlaylist(@Args({ name: 'playlistId', type: () => Int }) playlistId: number) {
    const query = await this.artistService.getArtistWithMostTracksInPlaylist(playlistId);
    console.log("resolver query: \n" + JSON.stringify(query));
    return query[0];
  }

  @Query(returns => Artist, { name: 'getSongsInPlaylist', nullable: true })
  async getSongsInPlaylist(@Args({ name: 'playlistId', type: () => Int }) playlistId: number) {
    return this.artistService.getSongsInPlaylist(playlistId);
  }

  @Mutation(returns => Post, {name: 'addArtist', nullable: false})
  async addArtist(
    @Args({name: 'artistId', type: () => Number}) artistId: number,
    @Args({name: 'artistName', type: () => String}) artistName: string,
    @Args({name: 'artistBirthyear', type: () => Number}) artistBirthyear: number,
    @Args({name: 'artistBirthplace', type: () => String}) artistBirthplace: string,
    ){
      return this.artistService.addArtist(artistId, artistName, artistBirthyear, artistBirthplace);
    }
}
