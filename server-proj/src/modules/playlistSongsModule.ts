import { Module } from '@nestjs/common';
import { playlistSongsService } from '../services/playlistSongsService';
import { PlaylistSongsResolver } from 'src/resolvers/playlistSongsResolvers';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
	imports: [
		GraphQLModule.forRoot({
			autoSchemaFile:true,
		}),
	],
	providers: [ playlistSongsService, PlaylistSongsResolver ],
	exports: [ playlistSongsService ],
})
export class PlaylistSongsModule {}
