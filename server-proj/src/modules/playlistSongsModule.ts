import { Module } from '@nestjs/common';
import { playlistSongsService } from '../services/playlistSongsService';
import { PlaylistSongsResolver } from 'src/resolvers/playlistSongsResolvers';
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
	providers: [ playlistSongsService, PlaylistSongsResolver ],
	exports: [ playlistSongsService ],
})
export class PlaylistSongsModule {}
