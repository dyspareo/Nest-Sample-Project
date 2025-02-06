// src/users/dto/delete-user.dto.ts
import { IsInt } from 'class-validator';

export class DeleteUserDto {
  @IsInt()
  readonly id: number;
}
