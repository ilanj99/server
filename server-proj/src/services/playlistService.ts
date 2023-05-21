import { knex } from "knex" 
import { Playlist } from "src/models/playlistModel"
import { Injectable } from "@nestjs/common";

@Injectable()
export class playlistService {

    // getPlaylistsWithSong = (songId: number) => {
    //     knex<Playlist>('playlistsWithSong')
    //         .select('playlistName')
    //         .from('playlists as pl, playlistSongs as ps')
    //         .where('ps.songId = songId AND ps.playlistId = pl.playlistId')
    // }
}