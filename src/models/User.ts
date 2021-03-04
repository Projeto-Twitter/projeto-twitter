import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinTable} from 'typeorm';
import Address from './Address';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  username: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  password: string;

  @Column('varchar')
  phone: string;

  @Column('timestamp with time zone')
  subscription_date: Date;

  @Column('int8')
  followers_amount: BigInt;

  @Column('int8')
  following_amount: BigInt;

  @Column('timestamp with time zone')
  born: Date;

  @Column()
  address_id: string;

  @OneToOne(()=> Address)
  @JoinTable({ name: 'address_id'})
  address: Address;

  @CreateDateColumn({ type: 'timestamp with time zone'})
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone'})
  updated_at: Date;
}

export default User;
