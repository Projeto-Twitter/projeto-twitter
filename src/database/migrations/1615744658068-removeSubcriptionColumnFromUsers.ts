import {MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class removeSubcriptionColumnFromUsers1615744658068 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('users', 'subscription_date')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn('users', new TableColumn({
        name: 'subscription_date',
        type: 'timestamp with time zone'
      }));
    }

}
