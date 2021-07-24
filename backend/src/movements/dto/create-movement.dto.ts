import { Min, Max, IsString, IsIn, IsInt, IsNotEmpty } from 'class-validator';

export class CreateMovementDto {
  @IsString()
  @IsIn(['entry', 'egress'])
  type: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @Min(0)
  @Max(233)
  quantity: number;
}
