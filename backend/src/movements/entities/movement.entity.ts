import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Stuff } from '../../stuffs/entities/stuff.entity';

@Entity()
export class Movement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column()
  stuffId: number;
}
