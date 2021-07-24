import { Min, Max, IsString, IsIn, IsInt } from 'class-validator';

export class CreateStuffDto {
  @IsString()
  name: string;

  @IsString()
  @IsIn(['new', 'used', 'broken'])
  state: string;

  @IsInt()
  @Min(0)
  @Max(233)
  quantity: number;
}
