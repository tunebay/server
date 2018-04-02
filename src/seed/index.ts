import { createConnection, Connection, getConnection } from 'typeorm';
import { User } from '../entity/User';
import { Playlist } from '../entity/Playlist';
import { Track } from '../entity/Track';
import { log } from 'util';

async function runSeeders() {
  await createConnection();
  const seedersConneciton: Connection = getConnection();
  await trackSeeds(seedersConneciton).execute();
  await seedersConneciton.close();
}

export default function trackSeeds(seedersConneciton: Connection) {
  return seedersConneciton
    .createQueryBuilder()
    .insert()
    .into(Track)
    .values([
      {
        playlistPosition: 1,
        playlistId: 1,
        title: 'Come Over',
        price: 0.79,
        duration: 190,
        createdAt: new Date(),
      },
      {
        playlistId: 1,
        playlistPosition: 2,
        title: 'Begging',
        price: 0.79,
        duration: 231,
        createdAt: new Date(),
      },
      {
        playlistId: 1,
        playlistPosition: 3,
        title: 'Finders Keepers (feat. Kojo Funds)',
        price: 0.79,
        duration: 224,
        createdAt: new Date(),
      },
      {
        playlistId: 1,
        playlistPosition: 4,
        title: 'Ivy',
        price: 0.79,
        duration: 287,
        createdAt: new Date(),
      },
      {
        playlistPosition: 5,
        playlistId: 1,
        title: 'Low Key',
        price: 0.79,
        duration: 190,
        createdAt: new Date(),
      },
      {
        playlistPosition: 6,
        playlistId: 1,
        title: 'Roses',
        price: 0.79,
        duration: 231,
        createdAt: new Date(),
      },
      {
        playlistPosition: 7,
        playlistId: 1,
        title: 'Weapon',
        price: 0.79,
        duration: 224,
        createdAt: new Date(),
      },
      {
        playlistPosition: 8,
        playlistId: 1,
        title: 'Passionfruit',
        price: 0.79,
        duration: 287,
        createdAt: new Date(),
      },
      {
        playlistPosition: 9,
        playlistId: 1,
        title: 'Finders Keepers (feat. Kojo Funds, Burna Boy & Don-E)[Remix]',
        price: 0.79,
        duration: 190,
        createdAt: new Date(),
      },
      {
        playlistPosition: 1,
        playlistId: 2,
        title: 'Come Over',
        price: 0.79,
        duration: 190,
        createdAt: new Date(),
      },
      {
        playlistId: 2,
        playlistPosition: 2,
        title: 'Begging',
        price: 0.79,
        duration: 231,
        createdAt: new Date(),
      },
      {
        playlistId: 2,
        playlistPosition: 3,
        title: 'Finders Keepers (feat. Kojo Funds)',
        price: 0.79,
        duration: 224,
        createdAt: new Date(),
      },
      {
        playlistId: 3,
        playlistPosition: 1,
        title: 'Ivy',
        price: 0.79,
        duration: 287,
        createdAt: new Date(),
      },
      {
        playlistId: 4,
        playlistPosition: 1,
        title: 'Low Key',
        price: 0.79,
        duration: 190,
        createdAt: new Date(),
      },
      {
        playlistId: 4,
        playlistPosition: 2,
        title: 'Roses',
        price: 0.79,
        duration: 231,
        createdAt: new Date(),
      },
      {
        playlistId: 4,
        playlistPosition: 3,
        title: 'Weapon',
        price: 0.79,
        duration: 224,
        createdAt: new Date(),
      },
      {
        playlistId: 5,
        playlistPosition: 1,
        title: 'Passionfruit',
        price: 0.79,
        duration: 287,
        createdAt: new Date(),
      },
      {
        playlistId: 5,
        playlistPosition: 2,
        title: 'Finders Keepers (feat. Kojo Funds, Burna Boy & Don-E)[Remix]',
        price: 0.79,
        duration: 190,
        createdAt: new Date(),
      },
      {
        playlistPosition: 3,
        playlistId: 5,
        title: 'Finders Keepers (feat. Kojo Funds, Burna Boy & Don-E)[Remix]',
        price: 0.79,
        duration: 190,
        createdAt: new Date(),
      },
      {
        playlistPosition: 1,
        playlistId: 6,
        title: 'New Name',
        price: 0.79,
        duration: 190,
        createdAt: new Date(),
      },
      {
        playlistPosition: 1,
        playlistId: 7,
        title: 'New Name',
        price: 0.79,
        duration: 190,
        createdAt: new Date(),
      },
      {
        playlistPosition: 1,
        playlistId: 8,
        title: 'New Name',
        price: 0.79,
        duration: 190,
        createdAt: new Date(),
      },
      {
        playlistPosition: 1,
        playlistId: 9,
        title: 'New Name',
        price: 0.79,
        duration: 190,
        createdAt: new Date(),
      },
      {
        playlistPosition: 1,
        playlistId: 10,
        title: 'New Name',
        price: 0.79,
        duration: 190,
        createdAt: new Date(),
      },
      {
        playlistPosition: 1,
        playlistId: 11,
        title: 'New Name',
        price: 0.79,
        duration: 190,
        createdAt: new Date(),
      },
      {
        playlistPosition: 2,
        playlistId: 11,
        title: 'New Name',
        price: 0.79,
        duration: 190,
        createdAt: new Date(),
      },
      {
        playlistPosition: 1,
        playlistId: 12,
        title: 'New Name',
        price: 0.79,
        duration: 190,
        createdAt: new Date(),
      },
    ]);
}
