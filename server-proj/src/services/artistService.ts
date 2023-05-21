
import { Injectable } from "@nestjs/common";
import { db } from "src/database";
// import { gql } from 'apollo-server-express';

// export const allArtistFields = gql`
//   fragment allArtistFields on Artist {
//     artistId
//     artistName
//     artistBirthyear
//     artistBirthplace
//   }
// `;


@Injectable()
export class artistService {

    async getAll() {
      const query = db('allArtists').select('artistName', 'artistId', 'artistBirthyear', 'artistBirthplace').from('artists');
    
      return query;
    }
    
    // getArtistsBornInYear = (year: number) => {
    //   const query = 
    //     db('artistsBornInYear')
    //     .select('artistName', 'artistId')
    //     .from('Artists')
    //     .where('artistBirthyear', year);
    //   return query;
    // }

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
