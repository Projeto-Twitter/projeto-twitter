import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('comments')
class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  text: string;

  @CreateDateColumn('timestamp with time zone')
  created_at: Date;

  @UpdateDateColumn('timestamp with time zone')
  updated_at: Date;
}

export default Comment;
