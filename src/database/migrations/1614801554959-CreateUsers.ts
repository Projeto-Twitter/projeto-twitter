import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUsers1614801554959 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'users',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
            },
            {
              name: 'username',
              type: 'varchar',
              isUnique: true,
            },
            {
              name: 'name',
              type: 'varchar',
            },
            {
              name: 'email',
              type: 'varchar',
              isUnique: true,
            },
            {
              name: 'password',
              type: 'varchar',
            },
            {
              name: 'phone',
              type: 'varchar'
            },
            {
              name: 'subscription_date',
              type: 'timestamp with time zone'
            },
            {
              name: 'followers_amount',
              type: 'bigint'
            },
            {
              name: 'following_amount',
              type: 'bigint',
            },
            {
              name: 'born',
              type: 'timestamp with time zone'
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
        'users',
        new TableForeignKey({
          name: 'user_address',
          columnNames: ['id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'address',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE',
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('users', 'user_address');
      await queryRunner.dropTable('users');
    }

}

