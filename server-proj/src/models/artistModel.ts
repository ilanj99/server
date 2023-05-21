import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class Artist {
    @Field()
    artistId: Number

    @Field()
    artistName: String

    @Field()
    artistBirthyear: Number
    
    @Field()
    artistBirthplace: String
}