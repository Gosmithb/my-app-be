import { MigrationInterface, QueryRunner } from "typeorm";

export class Prueba1715981607058 implements MigrationInterface {
    name = 'Prueba1715981607058'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usr"."users" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "uuid" uuid NOT NULL DEFAULT gen_random_uuid(), "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, CONSTRAINT "UQ_951b8f1dfc94ac1d0301a14b7e1" UNIQUE ("uuid"), CONSTRAINT "UQ_450a05c0c4de5b75ac8d34835b9" UNIQUE ("password"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usr"."users"`);
    }

}
