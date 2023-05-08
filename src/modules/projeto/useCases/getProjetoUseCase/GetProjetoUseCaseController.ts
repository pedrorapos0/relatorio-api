import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetProjetoUseCase } from "@modules/projeto/useCases/getProjetoUseCase/GetProjetoUseCase";

export class GetProjetoUseCaseController {
  public async handler(
    request: Request,
    response: Response
  ): Promise<Response> {
    const getProjetoUseCase = container.resolve(GetProjetoUseCase);
    const projetos = await getProjetoUseCase.execute();
    return response.json(projetos);
  }
}
