import {MigrationInterface, QueryRunner, Column, TableColumn} from "typeorm";

export class DeteleDateColumnByCommentsTable1614821834214 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('comments', 'date');

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        'comments',
        new TableColumn({
          name: 'date',
          type: 'varchar'
        })
      )
    }

}
