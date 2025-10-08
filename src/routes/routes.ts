import type { FastifyInstance } from 'fastify';

export async function routes(app: FastifyInstance) {

    app.get('/', async () => {
        return { message: 'Hello, World!' };
    });

}