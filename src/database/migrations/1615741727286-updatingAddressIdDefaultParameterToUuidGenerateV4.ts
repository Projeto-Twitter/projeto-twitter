import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class updatingAddressIdDefaultParameterToUuidGenerateV41615741727286 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('address', 'id');
      await queryRunner.addColumn(
        'address',
        new TableColumn({
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: "uuid",
          default: 'uuid_generate_v4()'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn('address', 'id');
      await queryRunner.addColumn('address', new TableColumn({
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
      }));
    }

}
