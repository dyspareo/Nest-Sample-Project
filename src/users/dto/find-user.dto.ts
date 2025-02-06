// src/users/dto/find-user.dto.ts
import { IsInt } from 'class-validator';

export class FindUserDto {
  @IsInt()
  readonly id: number;
}
