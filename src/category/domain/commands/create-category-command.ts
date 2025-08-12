import { inject, injectable } from "inversify";
import { noop } from "@/commom/types/noop.ts";
import { Category, CategoryProps } from "../entities/category.ts";
import { CreateCategoryService } from "../services/create-category-service.ts";

@injectable()
export class CreateCategoryCommand {
  public onSuccess: (category: Category) => Promise<void> = noop;
  public onCategoryAlreadyExists: () => Promise<void> = noop;
  public onError: () => Promise<void> = noop;
  constructor(
    @inject(CreateCategoryService)
    private createCategoryService: CreateCategoryService,
  ) {}
  public async execute(newCategory: CategoryProps): Promise<void> {
    const categoryAlreadyExists = false; // busca no repository quando houver
    if (categoryAlreadyExists) {
      return this.onCategoryAlreadyExists();
    }

    const category = await this.createCategoryService.create(newCategory);
    if (!category) {
      return this.onError();
    }

    return this.onSuccess(category);
  }
}
