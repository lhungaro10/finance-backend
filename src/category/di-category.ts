import { diContainer } from "@/di-container.ts";
import { CreateCategoryCommand } from "./domain/commands/create-category-command.ts";
import { CreateCategoryService } from "./domain/services/create-category-service.ts";
import { CreateCategoryController } from "./infraestructure/controllers/create-category.controller.ts";
import { ConcreteCreateCategoryService } from "./infraestructure/services/concrete-create-category-service.ts";

//controllers
diContainer.bind(CreateCategoryController).toSelf();

//commands
diContainer.bind(CreateCategoryCommand).toSelf();

//services
diContainer.bind(CreateCategoryService).to(ConcreteCreateCategoryService);

//repositories
