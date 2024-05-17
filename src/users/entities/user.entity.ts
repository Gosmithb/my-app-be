import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users', schema: 'usr'})
export class User {
  @PrimaryGeneratedColumn("identity", {generatedIdentity: "ALWAYS"})
  id: number;

  @Column({name: "uuid", type: "uuid", default: () => "gen_random_uuid()", unique: true})
  uuid : string;

  @Column({type: "varchar", length: 255})
  email: string;

  @Column({type: "varchar", length: 255, unique: true})
  password: string;
}
