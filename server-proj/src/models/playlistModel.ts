import { ObjectType } from "@nestjs/graphql"

@ObjectType()
export class Playlist {
    playlistName: String
    playlistId: number
}