import { fastify } from "fastify";
import {
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { Logger } from "./logger/logger.ts";

const logger = new Logger("SERVER");
const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.listen({ port: 8080 }, () => {
	logger.info(`listening on http://localhost:8080/`);
});
