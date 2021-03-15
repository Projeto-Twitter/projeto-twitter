import {Column, MigrationInterface, QueryRunner, Table} from "typeorm";

export class updatingNotNullFildsOfUsers1615818526253 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users');
      await queryRunner.createTable(
        new Table({
          name: 'users',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()'
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
              isNullable: true
            },
            {
              name: 'password',
              type: 'varchar',
            },
            {
              name: 'phone',
              type: 'varchar',
              isNullable: true
            },
            {
              name: 'followers_amount',
              type: 'bigint',
              default: 0,
            },
            {
              name: 'following_amount',
              type: 'bigint',
              default: 0,
            },
            {
              name: 'born',
              type: 'timestamp with time zone'
            },
            {
              name: 'address_id',
              type: 'uuid',
              isNullable: true
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
          ]
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users');
      await queryRunner.createTable(new Table(
        {
          name: 'users',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()'
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
              name: 'address_id',
              type: 'uuid'
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
        }
      ))
    }

}
