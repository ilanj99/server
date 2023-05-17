import { Module } from '@nestjs/common';
import { playlistService } from '../services/playlistService';

import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile:true,
    }),
  ],
  providers: [playlistService],
})
export class PlaylistModule {}
