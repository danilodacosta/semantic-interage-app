import { BaseResourceModel } from 'src/app/shared/models/base-resource.model';

export class Produto extends BaseResourceModel {
  constructor(
    public id?: number,
    public descricao?: string,
    public unidade?: number,
    public contaContabil?: number,
    public ultimoPrecoCompra?: number
  ) {
    super();
  }

  static fromJson(jsonData: any): Produto {
    return Object.assign(new Produto() , jsonData);
  }

}
