import { Song } from "src/models/songModel";
import { knex } from "knex" 

export class songService {
    getSongsLongerThanFiveMins = () => knex<Song>('longSongs')
                                        .select('songName', 'songId')
                                        .from('Songs')
                                        .where('songLength' > "0:05:00");

    getSongsInPlaylist = (playlistId: number) => knex<Song>('songsInPlaylist')
                                                    .select('songName', 'songId', 'artistId')
                                                    .from('Songs as song, playlistSongs as ps')
                                                    .where('ps.playlistId', playlistId)
                                                    .whereRaw('ps.songId = s.songId');


}