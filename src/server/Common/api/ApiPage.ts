import { IBasePageResponse } from '@server/Common/types/IBasePageResponse';
import { ApiServiceBase } from '@server/Common/api/ApiServiceBase';

export class ApiPage extends ApiServiceBase {
  public constructor() {
    super();
  }

  public init(asPath: string): Promise<IBasePageResponse> {
    return this.get(asPath);
  }
}

export const apiPage = new ApiPage();
