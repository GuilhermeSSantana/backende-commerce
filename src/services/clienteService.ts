import { Prisma } from "@prisma/client";
import { PrismaService } from "../../prisma/prismaService";

export default class ClienteService {
  async existEmail(email: string) {
    const cliente = await PrismaService.cliente.findUnique({
      where: { email },
    });
    return !!cliente;
  }

  async criarCliente(data: Prisma.ClienteCreateInput) {
    return PrismaService.cliente.create({ data });
  }

  async buscarClientePorId(id: string) {
    return PrismaService.cliente.findUnique({ where: { id } });
  }

  async atualizarCliente(id: string, data: Prisma.ClienteUpdateInput) {
    return PrismaService.cliente.update({ where: { id }, data });
  }

  async quantidadePedidosCliente(id: string) {
    const clienteComPedidos = await PrismaService.cliente.findUnique({
      where: { id },
      include: { pedidos: true },
    });
    return clienteComPedidos?.pedidos.length || 0;
  }
}
