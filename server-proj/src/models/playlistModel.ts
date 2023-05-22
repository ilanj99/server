import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class Playlist {
    @Field()
    playlistName: String

    @Field()
    playlistId: number
}