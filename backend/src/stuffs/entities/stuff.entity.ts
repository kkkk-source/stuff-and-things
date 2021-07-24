import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Stuff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  state: string;

  @Column()
  quantity: number;
}
