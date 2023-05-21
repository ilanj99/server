
import { Injectable } from "@nestjs/common";
import { gql } from "apollo-server-express";
import { db } from "src/database";
import { allArtistFields } from "src/fragments";


@Injectable()
export class artistService {

    async getAll() {
      const query = 
      db('allArtists')
      .select(...allArtistFields)
      .from('artists');
    
      return query;
    }
    
    async getArtistsBornInYear(year: number) {
      const query = 
        db('artistsBornInYear')
        .select(...allArtistFields)
        .from('artists')
        .where('artistBirthyear', year);
      return query;
    }

    // getArtistWithMostTracksInPlaylist = (playlistId: number) => {
    //     const songs = this.songService.getSongsInPlaylist(playlistId);

    //     return knex<Artist>('artistWithMostTracks').select('artistId').from(songs).groupBy('artistId').orderByRaw('count(*) DESC').limit(1);
    // }

    // addArtist = (artistId: number, artistName: string, artistBirthyear: number, artistBirthplace: string) => {
    //     const newArtist: Artist = {
    //       artistId,
    //       artistName,
    //       artistBirthyear,
    //       artistBirthplace,
    //     };
      
    //     return knex<Artist>('Artists')
    //       .insert(newArtist)
    //       .then(() => newArtist);
    //   }
      
}
