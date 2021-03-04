import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinTable} from 'typeorm';
import User from './User';
import Comment from './Comment';
import Tweet from './Tweet';
@Entity('actions')
class Actions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  user_id: string;

  @ManyToOne(()=> User)
  @JoinTable({ name: 'address_id'})
  user: User;

  @Column('uuid')
  comment_id: string;

  @ManyToOne(()=> Comment)
  @JoinTable({ name: 'comment_id'})
  comment: Comment;

  @Column('uuid')
  tweet_id: string;

  @ManyToOne(()=> Tweet)
  @JoinTable({ name: 'tweet_id'})
  tweet: Tweet;


  @CreateDateColumn('timestamp with time zone')
  created_at: Date;

  @UpdateDateColumn('timestamp with time zone')
  updated_at: Date;
}

export default Actions;
