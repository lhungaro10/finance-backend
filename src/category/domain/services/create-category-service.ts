import { injectable } from "inversify";
import type { Category, CategoryProps } from "../entities/category.ts";

@injectable()
export abstract class CreateCategoryService {
  public abstract create(newCategory: CategoryProps): Promise<Category>;
}
