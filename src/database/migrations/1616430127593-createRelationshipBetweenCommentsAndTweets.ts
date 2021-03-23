import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class createRelationshipBetweenCommentsAndTweets1616430127593
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'comments',
      new TableForeignKey({
        name: 'commentsForeignKey',
        columnNames: ['tweets_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tweets',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('comments', 'commentsForeignKey');
  }
}
