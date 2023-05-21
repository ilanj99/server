import { ObjectType } from "@nestjs/graphql"

@ObjectType()
export class PlaylistSongs {
    playlistId: number
    songId: number
}