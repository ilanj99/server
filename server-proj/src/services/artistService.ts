import { knex, Knex } from 'knex';
import { songService } from "./songService.js";
import { Artist } from 'src/models/artistModel.js';  

export class artistService {
    constructor(
        private readonly songService: songService,
      ) { }

    getAll = () => knex<Artist>('artisttable').select('artistName', 'artistId').from('Artists');

    getArtistsBornInYear = (year: number) => knex<Artist>('artistsBornInYear').select('artistName', 'artistId').from('Artists').where('artistBirthyear', year);

    getArtistWithMostTracksInPlaylist = (playlistId: number) => {
        const songs = this.songService.getSongsInPlaylist(playlistId);

        return knex<Artist>('artistWithMostTracks').select('artistId').from(songs).groupBy('artistId').orderByRaw('count(*) DESC').limit(1);
    }

    addArtist = (artistId: number, artistName: string, artistBirthyear: number, artistBirthplace: string) => {
        const newArtist: Artist = {
          artistId,
          artistName,
          artistBirthyear,
          artistBirthplace,
        };
      
        return knex<Artist>('Artists')
          .insert(newArtist)
          .then(() => newArtist);
      }
      
}
