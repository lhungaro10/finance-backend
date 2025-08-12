# Finance Backend

Uma API REST para gestão de finanças pessoais/empresariais.  
Permite organizar categorias e registrar transações (receitas e despesas), consultar por período e categoria, e obter indicadores como saldo atual e projetado. O backend é modular, orientado a domínio e preparado para evoluir com novas regras (recorrências, conciliação e relatórios agregados).

## Visão geral

- Linguagem: TypeScript (Node.js)
- Framework HTTP: Express 5 + routing-controllers
- DI/IoC: Inversify
- ORM: Prisma (PostgreSQL)
- Infra: Docker Compose (Postgres + pgAdmin)
- Utilitários: tsx (dev), Biome (lint), class-validator/transformer

## Tecnologias

- Node.js 22+, TypeScript 5
- Express 5 com routing-controllers (decorators, validação)
- Inversify (injeção de dependências)
- Prisma ORM (PostgreSQL)
- Docker Compose (Postgres 15 + pgAdmin)
- Class Validator/Transformer
- tsx para desenvolvimento

## Pré-requisitos

- Node.js 20+ (recomendado 22+)
- pnpm
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

## Configuração do Banco (Docker)

Suba o Postgres e o pgAdmin com Docker Compose:

```bash
docker compose up -d
```

Padrões do arquivo [docker-compose.yml](docker-compose.yml):

- Postgres: porta 5432
- pgAdmin: porta 8080 (se conflitar com a API em 8080, altere para `8081:80` no compose)

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

## Banco para Prisma

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
