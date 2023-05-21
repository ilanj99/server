import { Module } from '@nestjs/common';
import { artistService } from '../services/artistService';
import { ArtistResolver } from 'src/resolvers/artistResolvers';
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
  providers: [ artistService, ArtistResolver ],
  exports: [ artistService ],
})
export class ArtistModule {}
