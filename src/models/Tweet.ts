import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
} from 'typeorm';

import User from './User';

@Entity('tweets')
class Tweet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int8')
  likes_amount: number;

  @Column('int8')
  retweets_amount: number;

  @Column('int8')
  answer_amount: number;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinTable({ name: 'user_id' })
  user: User;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;
}

export default Tweet;
