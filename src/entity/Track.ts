import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/*
  Column type reference
  https://github.com/typeorm/typeorm/blob/master/src/driver/types/ColumnTypes.ts
*/

@Entity()
export class Track extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'decimal', unique: false, nullable: true })
  price: number;

  @Column({ type: 'integer', nullable: false })
  playlistPosition: number;

  @Column({ type: 'integer', unique: false, nullable: false })
  duration: number;

  @Column({
    type: 'timestamp with time zone',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
