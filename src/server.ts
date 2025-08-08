import "reflect-metadata";

import { StatusCodes } from "http-status-codes";
import { useContainer, useExpressServer } from "routing-controllers";
import { Logger } from "./commom/logger/logger.ts";
import express from "express";
import { diContainer } from "./di-container.ts";
import "./depedency-injection.ts";
import "./index.ts";

import { glob } from "glob";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function getAllControllers(): Promise<any[]> {
  const controllerFiles = glob.sync(
    path.resolve(__dirname, "./**/controllers/*.controller.ts"),
  );
  console.log("Controllers encontrados:", controllerFiles); // <-- Adicione este log

  const controllers: any[] = [];
  for (const file of controllerFiles) {
    const module = await import(file);
    // Se exporta apenas uma classe, pegue a primeira exportação
    controllers.push(module[Object.keys(module)[0]]);
  }
  return controllers;
}
async function bootstrap() {
  const app = express();

  // (Opcional) Adicione middlewares do Express aqui
  // app.use(cors());

  // 2. Configure o container de DI
  useContainer({
    // biome-ignore lint/suspicious/noExplicitAny: any is necessary for adapter
    get: <T>(someClass: { new (...args: any[]): T }): T => {
      return diContainer.get<T>(someClass);
    },
  });
  const controllers = await getAllControllers();

  // 3. Anexe o routing-controllers à sua instância do Express
  useExpressServer(app, {
    routePrefix: "/api",
    validation: true,
    classTransformer: true,
    plainToClassTransformOptions: {
      enableImplicitConversion: false,
    },
    defaultErrorHandler: false,
    controllers, // <-- Aqui pega todos os controllers dinamicamente
  });

  // 4. Adicione rotas extras
  // biome-ignore lint/suspicious/noExplicitAny: only for check route
  app.get("/api/health-check", (_: any, res: any) =>
    res.status(StatusCodes.OK).send(),
  );

  // 5. Inicie o servidor
  app.listen(8080, () => {
    const logger = new Logger("SERVER");
    logger.info("🚀 Servidor rodando em http://localhost:8080/");
  });
}
bootstrap();
