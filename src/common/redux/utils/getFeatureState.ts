import produce from 'immer';

import { IBaseFeatureState } from '@common/redux/types/IBaseFeatureState';
import { ApiServiceBase } from '@server/Common/api/ApiServiceBase';

class FeatureStateBase extends ApiServiceBase {
  public getUpdatedState<State, ROUTE extends string = string>(
    route: ROUTE,
  ): Promise<State> {
    return this.get(`/${route}`);
  }
}

const featureStateGetter = new FeatureStateBase();

export const getFeatureState = <State extends IBaseFeatureState['state']>(
  name: string,
  state: State,
): Promise<State> =>
  produce(state, async (draft: State) => {
    for (const idx in draft) {
      if (name === idx) {
        let value = draft[idx];

        value = await featureStateGetter.getUpdatedState<typeof value>(idx);
      }
    }
  });
