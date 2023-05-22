
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

    async getArtistWithMostTracksInPlaylist(playlistId: number){
      const query = 
      db('getSongsInPlaylist')
      .select('s.songId', 's.artistId')
      .join('songs as s', 'playlistSongs.songId', 's.songId')
      .where('playlistSongs.playlistId', playlistId);
      
      
      return db('artistWithMostTracks')
        .select('artistId')
        .from(query.as('subquery'))
        .groupBy('artistId')
        .orderByRaw('count(*) DESC')
        .limit(1);
    }

    async getSongsInPlaylist(playlistId: number){
      const query = 
      db('getSongsInPlaylist')
      .select('s.songId', 's.artistId')
      .join('songs as s', 'playlistSongs.songId', 's.songId')
      .where('playlistSongs.playlistId', playlistId);

      return query;
    }

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
