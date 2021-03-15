import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class updatingUserIdDefaultParameterToUuidGenerateV41615743079156 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'id');
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: "uuid",
        default: 'uuid_generate_v4()'
      }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'id');
    await queryRunner.addColumn('users', new TableColumn({
      name: 'id',
      type: 'uuid',
      isPrimary: true,
      generationStrategy: 'uuid',
    }));
  }
}
