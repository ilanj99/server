import { Module } from '@nestjs/common';
import { playlistSongsService } from '../services/playlistSongsService';

import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile:true,
    }),
  ],
  providers: [playlistSongsService],
})
export class PlaylistSongsModule {}
