
import { Injectable } from "@nestjs/common";
import { gql } from "apollo-server-express";
import { db } from "src/database";
import { allArtistFields } from "src/fragments";
import { Artist } from "src/models/artistModel";


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
      await db('getArtistWithMostTracksInPlaylist')
      .select('artistId')
      .from('songs as s')
      .join('playlistSongs as ps', 'ps.songId', 's.songId')
      .where('ps.playlistId', playlistId)
      .groupBy('artistId')
      .orderByRaw('count(*) DESC')
      .limit(1);

      return query;
    }

    async getSongsInPlaylist(playlistId: number){
      const query = 
      db('getSongsInPlaylist')
      .select('s.songId', 's.artistId')
      .join('songs as s', 'playlistSongs.songId', 's.songId')
      .where('playlistSongs.playlistId', playlistId);

      return query;
    }

    async addArtist(artistId: number, artistName: string, artistBirthyear: number, artistBirthplace: string){
        const newArtist: Artist = {
          artistId,
          artistName,
          artistBirthyear,
          artistBirthplace,
        };
      
        return db('artists')
          .insert(newArtist)
          .then(() => newArtist);
      }
      /*
  const team = await db('teams').where('id', teamId).first();

  if (!team) return null;

  const user = await db('users').where('id', userId).first();
  if (user) {
    const teamMembers = await db('team_members').where('teamId', teamId);
    teamMembers.push(user);

    await db('team_members').where('teamId', teamId).del();  
    await db('team_members').insert(teamMembers);
  }

  return team;
}
      */
}
