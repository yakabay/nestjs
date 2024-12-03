import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1732893731444 implements MigrationInterface {
  name = 'SchemaSync1732893731444';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" ALTER COLUMN "description" SET NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" ALTER COLUMN "description" DROP NOT NULL`,
    );
  }
}
