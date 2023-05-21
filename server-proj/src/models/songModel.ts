import { ObjectType } from "@nestjs/graphql"

@ObjectType()
export class Song {
    songId: number
    songName: string
    songLength: string 
    artistId: number
}