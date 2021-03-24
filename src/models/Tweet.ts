import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';

import User from './User';

@Entity('tweets')
class Tweet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int8')
  likes: number;

  @Column('int8')
  retweets: number;

  @Column('int8')
  answers: number;

  @Column()
  users_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'users_id' })
  user: User;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;
}

export default Tweet;
