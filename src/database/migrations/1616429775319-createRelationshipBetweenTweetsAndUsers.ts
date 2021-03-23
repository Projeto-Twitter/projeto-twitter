import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class createRelationshipBetweenTweetsAndUsers1616429775319
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'tweets',
      new TableForeignKey({
        name: 'tweetsForeignKey',
        columnNames: ['users_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('tweets', 'tweetsForeignKey');
  }
}
