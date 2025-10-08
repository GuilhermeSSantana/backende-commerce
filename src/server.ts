import Fastify, { fastify } from "fastify";
import dotenv from "dotenv";
import fastifyCors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { routes } from "./routes/routes";

dotenv.config();

const app = Fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "E-commerce API",
      version: "1.0.0",
    },
  },
});

app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

app.register(routes);

app.listen({ port: 3333 }).then(() => {
  console.log("Servidor rodando");
});
