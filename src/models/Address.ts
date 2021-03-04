import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('address')
class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  city: string;

  @Column('varchar')
  state: string;

  @CreateDateColumn('timestamp with time zone')
  created_at: Date;

  @UpdateDateColumn('timestamp with time zone')
  updated_at: Date;
}

export default Address;
