import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn} from 'typeorm';
import Address from './Action';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  subscription_date: Date;

  @Column()
  followers_amount: BigInt;

  @Column()
  following_amount: BigInt;

  @Column()
  born: Date;

  @ManyToOne(() => Address)
  @JoinColumn({ name: 'id' })
  provider: Address;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
