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
          columnNames: ['id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'users',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        })
      );

      await queryRunner.createForeignKey(
        'actions',
        new TableForeignKey({
          name: 'comments',
          columnNames: ['id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'comments',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        })
      );

      await queryRunner.createForeignKey(
        'actions',
        new TableForeignKey({
          name: 'tweets',
          columnNames: ['id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'tweets',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('actions', 'tweets');
      await queryRunner.dropForeignKey('actions', 'comments');
      await queryRunner.dropForeignKey('actions', 'user');
      await queryRunner.dropTable('users');
    }

}
