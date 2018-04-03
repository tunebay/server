import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './User';
import { Track } from './Track';

/*
  Column type reference
  https://github.com/typeorm/typeorm/blob/master/src/driver/types/ColumnTypes.ts
*/

@Entity()
export class Playlist extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'varchar', nullable: true })
  artwork: string;

  @Column({ type: 'varchar', nullable: false })
  permalink: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  url: string;

  @Column({ type: 'varchar', unique: false, nullable: false })
  title: string;

  @Column({ type: 'decimal', unique: false, nullable: true })
  price: number;

  @Column({ type: 'boolean', nullable: false, default: true })
  public: boolean;

  @Column({
    type: 'timestamp with time zone',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  // Relations

  @Column('integer', { nullable: false })
  userId: number;

  @ManyToOne(type => User, user => user.playlists)
  user: User;

  @OneToMany(type => Track, track => track.playlist)
  tracks: Track[];
}
