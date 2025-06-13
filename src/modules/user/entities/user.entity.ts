import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 150 })
  name: string;

  @Column({ type: 'varchar', length: 20 })
  username: string;

  @Column({ type: 'varchar'})
  email: string;

  @Column({ type: 'varchar' })
  birth_date: number;

  @Column({ type: 'varchar' })
  password: string;
}
