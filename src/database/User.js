// @flow
const users = [
  {
    id: 1,
    name: 'Mabel',
    username: 'mabel',
    bio: '🚀 Just out here writing fake bios that are at least 2 lines long',
    cover: 'https://i1.sndcdn.com/visuals-000161652148-8uID1y-t2480x520.jpg',
    photo: 'https://hamadamania.files.wordpress.com/2017/03/mabel08.jpg',
  },
  {
    id: 2,
    name: 'Kwabs',
    username: 'kwabs',
    bio: '🚀 Just out here writing fake bios that are at least 2 lines long',
    cover: 'https://i1.sndcdn.com/visuals-000002842378-gQ9HT3-t2480x520.jpg',
    photo: 'https://i1.sndcdn.com/avatars-000129316563-iqfoha-t500x500.jpg',
  },
  {
    id: 3,
    name: 'Taya',
    username: 'taya',
    bio: '🚀 Just out here writing fake bios that are at least 2 lines long',
    cover: 'https://i1.sndcdn.com/visuals-000024328107-Rz0BGo-t2480x520.jpg',
    photo: 'https://i1.sndcdn.com/avatars-000332530388-c4w465-t500x500.jpg',
  },
  {
    id: 4,
    name: 'Super-organism',
    username: 'superorganism',
    bio: '🚀 Just out here writing fake bios that are at least 2 lines long',
    cover: 'https://i1.sndcdn.com/visuals-000280613089-o3KIxO-t2480x520.jpg',
    photo: 'https://i1.sndcdn.com/avatars-000291846497-whxcmc-t500x500.jpg',
  },
  {
    id: 5,
    name: 'Dan Shake',
    username: 'danshake',
    bio: '🚀 Just out here writing fake bios that are at least 2 lines long',
    cover: 'https://i1.sndcdn.com/visuals-000017457541-BH5eIh-t2480x520.jpg',
    photo: 'https://i1.sndcdn.com/avatars-000115448975-e9t5cp-t500x500.jpg',
  },
];
export default class User {
  static findAll() {
    return users;
  }
  static findById(id: number) {
    return users.find(user => user.id === id);
  }
  static findByUsername(username: string) {
    return users.find(user => user.username === username);
  }
}
