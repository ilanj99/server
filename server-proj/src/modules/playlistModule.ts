import { Module } from '@nestjs/common';
import { playlistService } from '../services/playlistService';
import { PlaylistResolver } from 'src/resolvers/playlistResolvers';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),    
  ],
  providers: [ playlistService, PlaylistResolver ],
  exports: [ playlistService ],
})
export class PlaylistModule {}
