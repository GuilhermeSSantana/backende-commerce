# 🛒 API E-Commerce – Supabase + Prisma + TypeScript

## 📘 Descrição Geral
Este projeto é uma API RESTful desenvolvida em **Node.js + TypeScript** utilizando o **Prisma ORM** conectado ao **Supabase (PostgreSQL)**.  
O sistema gerencia **clientes, produtos, pedidos e itens de pedido**, simulando o fluxo básico de um e-commerce — desde o cadastro de clientes até a criação de pedidos com múltiplos produtos.

---

## ⚙️ Tecnologias Utilizadas
| Camada | Tecnologia |
|--------|-------------|
| Linguagem | TypeScript |
| ORM | Prisma |
| Banco de Dados | Supabase (PostgreSQL) |
| Servidor | Fastify |
<!-- | Autenticação | Supabase Auth (JWT) | -->


## 🔐 Integração com Supabase

A API utiliza o banco **PostgreSQL do Supabase**.  
Crie o arquivo `.env` na raiz do projeto com suas credenciais:

```env
SUPABASE_DB_URL="postgresql://postgres:<SENHA>@db.<ID_PROJETO>.supabase.co:5432/postgres"
SUPABASE_DB_DIRECT_URL="postgresql://postgres:<SENHA>@db.<ID_PROJETO>.supabase.co:5432/postgres"
PORT=3000
```

### Prisma Service

```ts
// src/prisma/prismaService.ts
import { PrismaClient } from '@prisma/client';
export const PrismaService = new PrismaClient();
```

---


| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/clientes` | Cadastra novo cliente |
| `GET` | `/clientes/pedidos` | Lista todos os pedidos do cliente |
| `POST` | `/produtos` | Cadastra um novo produto |
| `GET` | `/produtos` | Lista produtos disponíveis |
| `POST` | `/pedidos` | Cria pedido (com itens e clienteId) |
| `GET` | `/pedidos/:id` | Detalha pedido com produtos e cliente |

---

## 🧠 Comandos Úteis

# 1️⃣ Instalar todas as dependências do projeto
npm install

# 2️⃣ Gerar o cliente Prisma (necessário após qualquer mudança no schema.prisma)
npx prisma generate

# 3️⃣ Criar e aplicar migrações versionadas no banco (mantém histórico)
npx prisma migrate dev --name init

# 💡 Alternativa: atualizar o banco rapidamente sem criar migrações
# Útil em ambiente de desenvolvimento ou Supabase
npx prisma db push

# 4️⃣ Iniciar o servidor de desenvolvimento
npm run dev


## 👨‍💻 Autor
**Guilherme – Projeto E-Commerce (Supabase + Prisma + TS)**  
