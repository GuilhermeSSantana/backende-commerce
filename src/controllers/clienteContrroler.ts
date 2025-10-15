import { Prisma } from "@prisma/client";
import ClienteService from "../services/clienteService";

export default class ClienteController {
  private _clienteService = new ClienteService();

  async criarCliente(req: any, res: any) {
    const { nome, email, password } = req.body;
    const emailExists = await this._clienteService.existEmail(email);
    if (emailExists) {
      return res.status(400).send({ message: "Email já cadastrado." });
    }
    const cliente = await this._clienteService.criarCliente({
      nome,
      email,
      password,
    });
    return res.status(201).send(cliente);
  }


  


}
