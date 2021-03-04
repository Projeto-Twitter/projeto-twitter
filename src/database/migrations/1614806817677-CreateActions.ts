import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateActions1614806817677 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'actions',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
            },
            {
              name: 'user_id',
              type: 'uuid',
            },
            {
              name: 'comment_id',
              type: 'uuid',
            },
            {
              name: 'tweet_id',
              type: 'uuid',
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

      await queryRunner.createForeignKey(
        'actions',
        new TableForeignKey({
          name: 'user',
          columnNames: ['user_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'users',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        })
      );

      await queryRunner.createForeignKey(
        'actions',
        new TableForeignKey({
          name: 'comment',
          columnNames: ['comment_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'comments',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        })
      );

      await queryRunner.createForeignKey(
        'actions',
        new TableForeignKey({
          name: 'tweet',
          columnNames: ['tweet_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'tweets',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('actions', 'tweet');
      await queryRunner.dropForeignKey('actions', 'comment');
      await queryRunner.dropForeignKey('actions', 'user');
      await queryRunner.dropTable('users');
    }

}
