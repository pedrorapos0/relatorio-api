import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetByCodigoProjetoUseCase } from "@modules/projeto/useCases/getProjetoUseCase/GetByCodigoProjetoUseCase";

export class GetByCodigoProjetoUseCaseController {
  public async handler(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { numero } = request.params;
    const getByCodigoProjetoUseCase = container.resolve(
      GetByCodigoProjetoUseCase
    );
    const projeto = await getByCodigoProjetoUseCase.execute(parseInt(numero));
    return response.json(projeto);
  }
}
