import { knex } from "knex" 
import { Playlist } from "src/models/playlistModel"
import { Injectable } from "@nestjs/common";
import { db } from "src/database/index";

@Injectable()
export class playlistService {
	getAllPlaylists() {
		const query =
            db('getAllPlaylists')
            .select('playlistName', "playlistId")
            .from('playlists');
        return query;
	}

    async getPlaylistsWithSong(songName: string){
        const songId = 
            db('getSongId')
            .select('s.songId')
            .from('songs as s')
            .where('s.songName', songName)
            .limit(1);

        const query = db('playlistsWithSong')
                    .select('pl.playlistName', 'pl.playlistId')
                    .from('playlists as pl')
                    .join('playlistSongs as ps', 'ps.playlistId', 'pl.playlistId')
                    .where('ps.songId', songId);
        return query;

    }
}