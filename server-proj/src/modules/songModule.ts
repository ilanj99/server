import { Module } from '@nestjs/common';
import { songService } from '../services/songService';
import { SongResolver } from 'src/resolvers/songResolvers';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
    imports: [
      GraphQLModule.forRoot({
        autoSchemaFile:true,
      }),
    ],
    providers: [ songService, SongResolver ],
  exports: [ songService ],
  })
  export class SongModule {}
  