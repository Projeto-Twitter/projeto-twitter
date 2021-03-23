import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('adresses')
class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  city: string;

  @Column('varchar')
  state: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;
}

export default Address;
