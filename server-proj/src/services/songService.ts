import { Song } from "src/models/songModel";
import { db } from "src/database";
import { Injectable } from "@nestjs/common";
// import { Interval } from 'pg';

@Injectable()
export class songService {
    
    // async getSongsLongerThanFiveMins(){ 
        // const time:interval = "00:05:00";

    //     const query = 
    //     db('longSongs')
    //     .select('songName', 'songId', 'songLength')
    //     .from('songs')
    //     .where('songLength' > "00:05:00");

    // return query;
// }

    async getSongsInPlaylist(playlistId: number){ 
        const query = 
            db('songsInPlaylist')
            .select('songName', 's.songId', 'artistId')
            .from('songs as s')
            .join('playlistSongs as ps', 'ps.songId', 's.songId')
            .where('ps.playlistId', playlistId);
        return query;

}


}