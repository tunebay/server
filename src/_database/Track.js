// @flow
const tracks = [
  // 1
  {
    id: 1,
    position: 1,
    playlistId: 1,
    title: 'Come Over',
    price: 0.79,
    duration: 190,
  },
  {
    id: 2,
    playlistId: 1,
    position: 2,
    title: 'Begging',
    price: 0.79,
    duration: 231,
  },
  {
    id: 3,
    playlistId: 1,
    position: 3,
    title: 'Finders Keepers (feat. Kojo Funds)',
    price: 0.79,
    duration: 224,
  },
  {
    id: 4,
    playlistId: 1,
    position: 4,
    title: 'Ivy',
    price: 0.79,
    duration: 287,
  },
  {
    id: 5,
    position: 5,
    playlistId: 1,
    title: 'Low Key',
    price: 0.79,
    duration: 190,
  },
  {
    id: 6,
    position: 6,
    playlistId: 1,
    title: 'Roses',
    price: 0.79,
    duration: 231,
  },
  {
    id: 7,
    position: 7,
    playlistId: 1,
    title: 'Weapon',
    price: 0.79,
    duration: 224,
  },
  {
    id: 8,
    position: 8,
    playlistId: 1,
    title: 'Passionfruit',
    price: 0.79,
    duration: 287,
  },
  {
    id: 9,
    position: 9,
    playlistId: 1,
    title: 'Finders Keepers (feat. Kojo Funds, Burna Boy & Don-E)[Remix]',
    price: 0.79,
    duration: 190,
  },
  {
    id: 10,
    position: 1,
    playlistId: 2,
    title: 'Come Over',
    price: 0.79,
    duration: 190,
  },
  {
    id: 11,
    playlistId: 2,
    position: 2,
    title: 'Begging',
    price: 0.79,
    duration: 231,
  },
  {
    id: 12,
    playlistId: 2,
    position: 3,
    title: 'Finders Keepers (feat. Kojo Funds)',
    price: 0.79,
    duration: 224,
  },
  {
    id: 13,
    playlistId: 3,
    position: 1,
    title: 'Ivy',
    price: 0.79,
    duration: 287,
  },
  {
    id: 14,
    playlistId: 4,
    position: 1,
    title: 'Low Key',
    price: 0.79,
    duration: 190,
  },
  {
    id: 15,
    playlistId: 4,
    position: 2,
    title: 'Roses',
    price: 0.79,
    duration: 231,
  },
  {
    id: 16,
    playlistId: 4,
    position: 3,
    title: 'Weapon',
    price: 0.79,
    duration: 224,
  },
  {
    id: 17,
    playlistId: 5,
    position: 1,
    title: 'Passionfruit',
    price: 0.79,
    duration: 287,
  },
  {
    id: 18,
    playlistId: 5,
    position: 2,
    title: 'Finders Keepers (feat. Kojo Funds, Burna Boy & Don-E)[Remix]',
    price: 0.79,
    duration: 190,
  },
  {
    id: 19,
    position: 3,
    playlistId: 5,
    title: 'Finders Keepers (feat. Kojo Funds, Burna Boy & Don-E)[Remix]',
    price: 0.79,
    duration: 190,
  },
  {
    id: 21,
    position: 1,
    playlistId: 6,
    title: 'New Name',
    price: 0.79,
    duration: 190,
  },
  {
    id: 22,
    position: 1,
    playlistId: 7,
    title: 'New Name',
    price: 0.79,
    duration: 190,
  },
  {
    id: 23,
    position: 1,
    playlistId: 8,
    title: 'New Name',
    price: 0.79,
    duration: 190,
  },
  {
    id: 24,
    position: 1,
    playlistId: 9,
    title: 'New Name',
    price: 0.79,
    duration: 190,
  },
  {
    id: 25,
    position: 1,
    playlistId: 10,
    title: 'New Name',
    price: 0.79,
    duration: 190,
  },
  {
    id: 26,
    position: 1,
    playlistId: 11,
    title: 'New Name',
    price: 0.79,
    duration: 190,
  },
  {
    id: 27,
    position: 2,
    playlistId: 11,
    title: 'New Name',
    price: 0.79,
    duration: 190,
  },
  {
    id: 28,
    position: 1,
    playlistId: 12,
    title: 'New Name',
    price: 0.79,
    duration: 190,
  },
];

export default class Track {
  static findByPlaylistId(id: number) {
    return tracks.filter(t => t.playlistId === id);
  }
}