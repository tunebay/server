// @flow
const playlists = [
  {
    id: 1,
    userId: 1,
    title: 'Ivy To Roses',
    price: 5.99,
    artwork:
      'https://i2.wp.com/s1.xclusivejams.com/2017/10/Mabel-Ivy-To-Roses-Mixtape-iTunes-Plus-M4A.jpg?w=640&ssl=1',
    permalink: 'ivy-to-roses',
  },
  {
    id: 2,
    userId: 1,
    title: 'My Boy My Town',
    price: 0.99,
    artwork:
      'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/58/6e/51/586e51d3-6175-c286-a06b-7f2d007875f2/15UMGIM65453.jpg/1200x630bb.jpg',
    permalink: 'my-boy-my-town',
  },
  {
    id: 3,
    userId: 1,
    title: 'Thinking Of You',
    price: 5.99,
    artwork: 'https://images.genius.com/122c310b162d72c5d271d32753b5fa60.630x630x1.jpg',
    permalink: 'thinking-of-you',
  },
  {
    id: 4,
    userId: 1,
    title: 'Finders Keepers',
    price: 5.99,
    artwork: 'https://pbs.twimg.com/profile_images/862396484658057223/0RDeiaKc.jpg',
    permalink: 'finders-keepers',
  },
  {
    id: 5,
    userId: 2,
    title: 'Love + War',
    price: 5.99,
    artwork: 'https://i1.sndcdn.com/artworks-0hDPbHUtMjWO-0-t500x500.jpg',
    permalink: 'love-war',
  },
  {
    id: 6,
    userId: 2,
    title: 'Cheating On Me',
    price: 5.99,
    artwork: 'https://i1.sndcdn.com/artworks-000138126630-gops5c-t500x500.jpg',
    permalink: 'cheating-on-me',
  },
  {
    id: 7,
    userId: 2,
    title: 'Walk',
    price: 5.99,
    artwork: 'https://i1.sndcdn.com/artworks-wylrh6pNAk2b-0-t500x500.jpg',
    permalink: 'walk',
  },
  {
    id: 8,
    userId: 3,
    title: 'When Ur Sober',
    price: 5.99,
    artwork: 'https://i1.sndcdn.com/artworks-7xbVEf5nJf1s-0-t500x500.jpg',
    permalink: 'when-ur-sober',
  },
  {
    id: 9,
    userId: 3,
    title: 'Redlight',
    price: 5.99,
    artwork: 'https://i1.sndcdn.com/artworks-b2350727-2418-480b-87c0-47178c030ea2-0-t500x500.jpg',
    permalink: 'redlight',
  },
  {
    id: 10,
    userId: 3,
    title: 'Deeper',
    price: 5.99,
    artwork: 'https://i1.sndcdn.com/artworks-S5enoBO1t7ca-0-t500x500.jpg',
    permalink: 'deeper',
  },
  {
    id: 11,
    userId: 4,
    title: 'Something For Your M.I.N.D',
    price: 5.99,
    artwork: 'https://i1.sndcdn.com/artworks-NeORKaFfnXy0-0-t500x500.png',
    permalink: 'something-for-your-mind',
  },
  {
    id: 12,
    userId: 4,
    title: 'Nobody Cares',
    price: 5.99,
    artwork: 'https://i1.sndcdn.com/artworks-w1rexXd0Krku-0-t500x500.png',
    permalink: 'nobody-cares',
  },
  {
    id: 13,
    userId: 5,
    title: "Shake's On A Plane ",
    price: 5.99,
    artwork: 'https://i1.sndcdn.com/artworks-000246329913-s5iwvy-t500x500.jpg',
    permalink: 'shakes-on-a-plane',
  },
  {
    id: 14,
    userId: 5,
    title: 'Northern Merry',
    price: 5.99,
    artwork: 'https://i1.sndcdn.com/artworks-000142313354-20yxz2-t500x500.jpg',
    permalink: 'nothern-merry',
  },
];

export default class Playlist {
  static findAllByUserId(id: number) {
    return playlists.filter(p => p.userId === id);
  }

  static findById(id: number) {
    return playlists.find(p => p.id === id);
  }

  static findAll() {
    return playlists;
  }

  static findByPath(userId: number, permalink: string) {
    return playlists.find(p => p.userId === userId && p.permalink === permalink);
  }
}
