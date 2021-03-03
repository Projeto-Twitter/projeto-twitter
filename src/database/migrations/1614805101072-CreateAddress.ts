import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAddress1614805101072 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'address',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
            },
            {
              name: 'city',
              type: 'varchar'
            },
            {
              name: 'state',
              type: 'varchar'
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
      queryRunner.dropTable('address');
    }

}
