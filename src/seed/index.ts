import { createConnection, Connection, getConnection } from 'typeorm';
import trackSeeds from './track';
import userSeeds from './user';
import playlistSeeds from './playlist';

/* 
  TODO build better seeding solution
    - [] Truncate data and reset requence
    - [] run individual seeders
    - [] undo individual seeders
    - [] remove process.argv stuff
    - [] auto run seeders using timestamps
    - [] rollback on error
    - [] Dont run seeders if upto date
*/

if (!process.argv[3]) throw new Error('Invalid arguments');

async function runSeeders() {
  await createConnection();
  const seedersConneciton: Connection = getConnection();

  // Order is important due to relations
  await userSeeds(seedersConneciton).execute();
  await playlistSeeds(seedersConneciton).execute();
  await trackSeeds(seedersConneciton).execute();

  await seedersConneciton.close();
}

if (process.argv[3] === 'seed') {
  runSeeders();
}
