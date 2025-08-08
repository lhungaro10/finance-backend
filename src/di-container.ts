import { Container } from "inversify";

const diContainer = new Container();

diContainer.bind(Container).toConstantValue(diContainer);

export { diContainer };
