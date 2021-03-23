import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class createRelationshipBetweenUserAndAddress1616428851625
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        name: 'addressForeignKey',
        columnNames: ['address_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'adresses',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('users', 'addressForeignKey');
  }
}
