import { injectable } from "inversify";
import { CreateCategoryService } from "@/category/domain/services/create-category-service.ts";
import {
  Category,
  type CategoryProps,
} from "../../domain/entities/category.ts";
import { Logger } from "@/commom/logger/logger.ts";

@injectable()
export class ConcreteCreateCategoryService extends CreateCategoryService {
  private logger = new Logger(ConcreteCreateCategoryService.name);

  public async create(newCategory: CategoryProps) {
    // const persistence = [
    //   new Category({
    //     name: "Teste",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   }),
    //   new Category({
    //     name: "Teste 2",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   }),
    //   new Category({
    //     name: "Teste 3",
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //   }),
    // ];
    this.logger.info("entrou no service");
    const createdCategory = new Category(newCategory);

    return createdCategory;
  }
}
