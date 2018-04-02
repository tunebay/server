import { User } from '../entity/User';
import { Connection } from 'typeorm';

export default function userSeeds(seedersConneciton: Connection) {
  return seedersConneciton
    .createQueryBuilder()
    .insert()
    .into(User)
    .values([
      {
        name: 'Mabel',
        username: 'mabel',
        bio: '🚀 Just out here writing fake bios that are at least 2 lines long',
        coverPhoto: 'https://i1.sndcdn.com/visuals-000161652148-8uID1y-t2480x520.jpg',
        profilePicture: 'https://hamadamania.files.wordpress.com/2017/03/mabel08.jpg',
        email: 'mabel@mabel.com',
        password: 'Sup3rS3cr3t',
        createdAt: new Date(),
      },
      {
        name: 'Kwabs',
        username: 'kwabs',
        bio: '🚀 Just out here writing fake bios that are at least 2 lines long',
        coverPhoto: 'https://i1.sndcdn.com/visuals-000002842378-gQ9HT3-t2480x520.jpg',
        profilePicture: 'https://i1.sndcdn.com/avatars-000129316563-iqfoha-t500x500.jpg',
        email: 'kwabs@kwabs.com',
        password: 'Sup3rS3cr3t',
        createdAt: new Date(),
      },
      {
        name: 'Taya',
        username: 'taya',
        bio: '🚀 Just out here writing fake bios that are at least 2 lines long',
        coverPhoto: 'https://i1.sndcdn.com/visuals-000024328107-Rz0BGo-t2480x520.jpg',
        profilePicture: 'https://i1.sndcdn.com/avatars-000332530388-c4w465-t500x500.jpg',
        email: 'taya@gmail.com',
        password: 'Sup3rS3cr3t',
        createdAt: new Date(),
      },
      {
        name: 'Super-organism',
        username: 'superorganism',
        bio: '🚀 Just out here writing fake bios that are at least 2 lines long',
        coverPhoto: 'https://i1.sndcdn.com/visuals-000280613089-o3KIxO-t2480x520.jpg',
        profilePicture: 'https://i1.sndcdn.com/avatars-000291846497-whxcmc-t500x500.jpg',
        email: 'superorganism@facebook.com',
        password: 'Sup3rS3cr3t',
        createdAt: new Date(),
      },
      {
        name: 'Dan Shake',
        username: 'danshake',
        bio: '🚀 Just out here writing fake bios that are at least 2 lines long',
        coverPhoto: 'https://i1.sndcdn.com/visuals-000017457541-BH5eIh-t2480x520.jpg',
        profilePicture: 'https://i1.sndcdn.com/avatars-000115448975-e9t5cp-t500x500.jpg',
        email: 'danshake@gmail.com',
        password: 'Sup3rS3cr3t',
        createdAt: new Date(),
      },
    ]);
}
