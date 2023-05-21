import { Module } from '@nestjs/common';
import { playlistService } from '../services/playlistService';
import { PlaylistResolver } from 'src/resolvers/playlistResolvers';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile:true,
    }),
  ],
  providers: [ playlistService, PlaylistResolver ],
  exports: [ playlistService ],
})
export class PlaylistModule {}
