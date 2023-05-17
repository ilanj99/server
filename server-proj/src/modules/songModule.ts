import { Module } from '@nestjs/common';
import { songService } from '../services/songService';


import { GraphQLModule } from '@nestjs/graphql';

@Module({
    imports: [
      GraphQLModule.forRoot({
        autoSchemaFile:true,
      }),
    ],
    providers: [songService],
  })
  export class SongModule {}
  