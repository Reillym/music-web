import { schema } from 'normalizr';

// Defines artist schema
export const artist = new schema.Entity('artists');
export const artistList = [artist];

// Defines song schema
export const song = new schema.Entity('songs', {
  artist: artist
});
export const songList = [song];
