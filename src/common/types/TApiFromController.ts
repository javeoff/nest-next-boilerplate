import { EmptyObject } from 'redux';

/**
 * Создает тип для Api класса на основе контроллера.
 */
export type TApiFromController<
  Controller,
  ControllerWithoutPage = Omit<Controller, 'constructor' | 'index'>,
> = {
  [key in keyof ControllerWithoutPage]: ControllerWithoutPage[key] extends (
    ...args: infer Args
  ) => infer Result
    ? (...args) => Result extends Promise<void> ? Promise<EmptyObject> : Result
    : never;
};
