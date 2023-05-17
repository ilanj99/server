import { Module } from '@nestjs/common';
import { artistService } from './services/artistService';
import { songService } from './services/songService';
import { playlistService } from './services/playlistService';

import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile:true,
    }),
    songModule
  ],
  providers: [artistService, songService, playlistService],
})
export class AppModule {}
