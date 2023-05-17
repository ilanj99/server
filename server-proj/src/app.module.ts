import { Module } from '@nestjs/common';
import { SongModule } from './modules/songModule';
import { ArtistModule } from './modules/artistModule';
import { PlaylistModule } from './modules/playlistModule';
import { PlaylistSongsModule } from './modules/playlistSongsModule';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile:true,
    }),
  ],
  providers: [],
})
export class AppModule {}
