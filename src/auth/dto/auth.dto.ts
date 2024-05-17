import { IsEmail, IsNotEmpty, IsOptional, IsString } from "@nestjs/class-validator";

export class UserAuthDto {
  @IsOptional()
  @IsString()
  uuid: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
  
  @IsNotEmpty()
  @IsString()
  password: string;
}
