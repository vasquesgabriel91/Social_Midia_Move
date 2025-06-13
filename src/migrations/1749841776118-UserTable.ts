import { MigrationInterface, QueryRunner } from "typeorm";

export class UserTable1749841776118 implements MigrationInterface {
    name = 'UserTable1749841776118'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying(150) NOT NULL, "username" character varying(20) NOT NULL, "email" character varying NOT NULL, "birth_date" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
