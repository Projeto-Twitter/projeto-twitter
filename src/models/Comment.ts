import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
} from 'typeorm';

import Tweet from './Tweet';

@Entity('comments')
class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  text: string;

  @Column()
  tweets_id: string;

  @ManyToOne(() => Tweet)
  @JoinTable({ name: 'tweets_id' })
  tweet: Tweet;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updated_at: Date;
}

export default Comment;
