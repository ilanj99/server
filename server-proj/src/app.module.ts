import { Module } from '@nestjs/common';
import { SongModule } from './modules/songModule';
import { ArtistModule } from './modules/artistModule';
import { PlaylistModule } from './modules/playlistModule';
import { PlaylistSongsModule } from './modules/playlistSongsModule';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
    ArtistModule
  ]
})
export class AppModule {}
