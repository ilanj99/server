import { Module } from '@nestjs/common';
import { songService } from '../services/songService';
import { SongResolver } from 'src/resolvers/songResolvers';
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
  providers: [ songService, SongResolver ],
  exports: [ songService ],
  })
  export class SongModule {}
  