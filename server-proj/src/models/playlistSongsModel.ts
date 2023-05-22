import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class PlaylistSongs {
    @Field()
    playlistId: number

    @Field()
    songId: number
}