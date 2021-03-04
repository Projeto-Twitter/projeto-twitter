import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToMany} from 'typeorm';
import Tweet from './Tweet';
import User from './User';

@Entity('actions')
class Actions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => User)
  @JoinColumn({name: 'id'})
  user: User;

  @ManyToMany(() => Comment)
  @JoinColumn({name: 'id'})
  comments: Comment;

  @ManyToMany(() => Tweet)
  @JoinColumn({name: 'id'})
  tweets: Tweet;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Actions;
