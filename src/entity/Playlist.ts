import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

  static findByUsername(username: string) {
    return this.createQueryBuilder('user')
      .where('user.username = :username', { username })
      .getOne();
  }
}
