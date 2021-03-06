import {
  connect,
  InferableComponentEnhancer,
  ResolveThunks,
} from 'react-redux';
import { AnyObject } from 'immer/dist/types/types-internal';

import { IRootState } from '@common/redux/store';
import { getFeatureStateSelector } from '@common/redux/selectors/getFeatureStateSelector';
import { Feature } from '@common/enums/Feature';
import { IFeatureState } from '@common/redux/types/IFeatureState';

type IMapStateToProps = (state: IRootState) => Record<string, unknown>;
type IMapDispatchToProps = AnyObject;

type IWithFeatureState<
  FeatureName extends Feature,
  MapStateToProps extends IMapStateToProps | undefined = undefined,
  MapDispatchToProps extends IMapDispatchToProps | undefined = undefined,
> = (MapStateToProps extends IMapStateToProps
  ? ReturnType<MapStateToProps>
  : unknown) &
  (MapDispatchToProps extends IMapDispatchToProps
    ? MapDispatchToProps
    : unknown) & {
    state: IFeatureState<FeatureName>;
  };

interface IParams<
  FeatureName extends Feature,
  MapStateToProps extends IMapStateToProps | undefined = undefined,
  MapDispatchToProps extends IMapDispatchToProps | undefined = undefined,
> {
  feature: FeatureName;
  mapStateToProps?: MapStateToProps;
  mapDispatchToProps?: MapDispatchToProps;
}

/**
 * Хок, расширяющий connect redux'а. Предоставляет состояние для фич,
 * использующих данные с бэкенда по их имени.
 */
export const withFeatureState = <
  FeatureName extends Feature,
  MapStateToProps extends IMapStateToProps | undefined = undefined,
  MapDispatchToProps extends IMapDispatchToProps | undefined = undefined,
>({
  feature,
  mapStateToProps,
  mapDispatchToProps,
}: IParams<
  FeatureName,
  MapStateToProps,
  MapDispatchToProps
>): InferableComponentEnhancer<
  IWithFeatureState<
    FeatureName,
    MapStateToProps,
    ResolveThunks<MapDispatchToProps>
  >
> => {
  const responseSelector = getFeatureStateSelector(feature);

  const mapStateToProperties = (
    state: IRootState,
  ): { state: IFeatureState<FeatureName> } & ReturnType<IMapStateToProps> => ({
    state: responseSelector(state),
    ...(mapStateToProps ? mapStateToProps(state) : undefined),
  });

  return ((component) =>
    connect(
      mapStateToProperties,
      mapDispatchToProps,
    )(component)) as InferableComponentEnhancer<
    ReturnType<typeof mapStateToProperties> & ResolveThunks<MapDispatchToProps>
  >;
};
