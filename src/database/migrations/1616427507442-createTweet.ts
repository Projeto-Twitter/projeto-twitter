import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class createTweet1616427507442 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tweets',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'likes',
            type: 'bigint',
            default: 0,
          },
          {
            name: 'retweets',
            type: 'bigint',
            default: 0,
          },
          {
            name: 'answers',
            type: 'bigint',
            default: 0,
          },
          {
            name: 'users_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tweets');
  }
}
