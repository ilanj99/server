import { Field, ObjectType } from "@nestjs/graphql"
// import { Interval } from 'pg';

@ObjectType()
export class Song {
    @Field()
    songId: number

    @Field()
    songName: string

    @Field()
    songLength: string 

    @Field()
    artistId: number
}