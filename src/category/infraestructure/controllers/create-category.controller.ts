import { inject, injectable } from "inversify";
import { Body, JsonController, Post, Res } from "routing-controllers";
import { Logger } from "../../../commom/logger/logger.ts";
import { CreateCategoryParams } from "./request/create-category-params.ts";
import { CreateCategoryCommand } from "@/category/domain/commands/create-category-command.ts";
import { Response } from "express";
import type { Category } from "@/category/domain/entities/category.ts";

@injectable()
@JsonController("/category")
export class CreateCategoryController {
  private logger = new Logger(CreateCategoryController.name);
  constructor(
    @inject(CreateCategoryCommand)
    private createCategoryCommand: CreateCategoryCommand,
  ) {
    console.log("Instância do UserController criada com UserService injetado!");
  }
  @Post()
  public async createCategory(
    @Body() newCategory: CreateCategoryParams,
    @Res() reply: Response,
  ) {
    this.createCategoryCommand.onError = this.onError(reply);
    this.createCategoryCommand.onCategoryAlreadyExists =
      this.onCategoryAlreadyExists(reply);
    this.createCategoryCommand.onSuccess = this.onSuccess(reply);

    await this.createCategoryCommand.execute({
      ...newCategory,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return reply;
  }

  private onSuccess(reply: Response): (category: Category) => Promise<void> {
    return async (category: Category): Promise<void> => {
      reply.status(200).send({
        category: category,
      });
    };
  }

  private onCategoryAlreadyExists(reply: Response): () => Promise<void> {
    return async (): Promise<void> => {
      reply.status(409).send({
        ok: "user_not_authorized_to_perform_this_action",
      });
    };
  }

  private onError(reply: Response): () => Promise<void> {
    return async (): Promise<void> => {
      this.logger.error("deu erro");
      reply.status(500).send({
        ok: "okay",
      });
    };
  }
}
