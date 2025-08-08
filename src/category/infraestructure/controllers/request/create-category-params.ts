import { IsString } from "class-validator";

export class CreateCategoryParams {
  @IsString()
  public name!: string;
}
