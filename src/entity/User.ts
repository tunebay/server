import bcrypt from 'bcrypt';
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BeforeInsert,
} from 'typeorm';

import { Playlist } from './Playlist';

/*
  Column type reference
  https://github.com/typeorm/typeorm/blob/master/src/driver/types/ColumnTypes.ts
*/

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'varchar', nullable: true })
  bio: string;

  @Column({ type: 'varchar', nullable: true })
  coverPhoto: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  profilePicture: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  username: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({
    type: 'timestamp with time zone',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  // Relations

  @OneToMany(type => Playlist, playlist => playlist.user)
  playlists: Playlist[];

  // Hooks

  @BeforeInsert()
  async hashPassword() {
    const password = await bcrypt.hash(this.password, 10);
    this.password = password;
  }

  // Methods

  static findByUsername(username: string) {
    return this.createQueryBuilder('user')
      .where('user.username = :username', { username })
      .getOne();
  }
}
