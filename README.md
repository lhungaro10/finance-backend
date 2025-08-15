[LICENSE__BADGE]: https://img.shields.io/github/license/Fernanda-Kipper/Readme-Templates?style=for-the-badge
[JAVASCRIPT__BADGE]: https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript
[TYPESCRIPT__BADGE]: https://img.shields.io/badge/typescript-D4FAFF?style=for-the-badge&logo=typescript
[EXPRESS__BADGE]: https://img.shields.io/badge/express-005CFE?style=for-the-badge&logo=express
[VUE__BADGE]: https://img.shields.io/badge/VueJS-fff?style=for-the-badge&logo=vue
[NEST__BADGE]: https://img.shields.io/badge/nest-7026b9?style=for-the-badge&logo=nest
[GRAPHQL__BADGE]: https://img.shields.io/badge/GraphQL-e10098?style=for-the-badge&logo=graphql
[JAVA_BADGE]: https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white
[SPRING_BADGE]: https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white
[MONGO_BADGE]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[AWS_BADGE]: https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white
[PYTHON_BADGE]: https://img.shields.io/badge/Python-3.11.9-blue?style=for-the-badge&logo=python&logoColor=lightskyblue
[PRS_BADGE]: https://img.shields.io/badge/PRs-welcome-green?style=for-the-badge
[POSTGRESQL_BADGE]: https://img.shields.io/badge/Postgres-%23316192?style=for-the-badge&logo=postgresql&logoColor=white
[PNPM_BADGE]: https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=fff
[PRISMA_BADGE]: https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white

<h1 align="center" style="font-weight: bold;">Finance Backend 💵</h1>

![license][LICENSE__BADGE]
![pnpm][PNPM_BADGE]
![express][EXPRESS__BADGE]
![typescript][TYPESCRIPT__BADGE]
![prisma][PRISMA_BADGE]
![postgres][POSTGRESQL_BADGE]

## Descrição

Uma API REST para gestão de finanças pessoais/empresariais.  
Permite organizar categorias e registrar transações (receitas e despesas), consultar por período e categoria, e obter indicadores como saldo atual e projetado. O backend é modular, orientado a domínio e preparado para evoluir com novas regras (recorrências, conciliação e relatórios agregados).

## Pré-requisitos

- Node.js 20+ (recomendado 22+)
- Docker e Docker Compose

## Estrutura geral dos módulos

```
module/
    di-module.ts
    domain/
      commands/
      entities/
      repositories/
      services/
    infraestructure/
      controllers/
        request/
      repositories/
      services/
```

## Scripts

- `pnpm dev` — inicia em modo desenvolvimento (tsx watch)
- `pnpm build` — compila TypeScript
- `pnpm start` — roda o build
- `pnpm prisma:generate` — gera o Prisma Client
- `pnpm prisma:migrate` — cria/aplica migrações

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```
DB_URL="postgresql://<DB_USER>:<DB_PASSWORD>@localhost:5432/<DB_NAME>?schema=public"

# Usadas no docker-compose (Postgres/pgAdmin)
DB_USER=
DB_PASSWORD=
DB_NAME=

PGADMIN_USER=
PGADMIN_PASSWORD=
```

Ajuste `DB_URL` conforme seu ambiente.

### Contributors

This project exists thanks to all the people who contribute.
<a href="https://github.com/lhungaro10/finance-backend/graphs/contributors">

  <div>
    <img src="https://avatars.githubusercontent.com/u/94537981?v=4" width="75px;" style="border-radius: 8px" alt="Fernanda Kipper Profile Picture"/><br>
    <sub>
      <b>Lucas Hungaro</b>
    </sub>
  </div>
</a>

## License

[MIT](LICENSE) © Lucas Hungaro
