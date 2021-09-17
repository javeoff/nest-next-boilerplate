import { AnyObject } from 'immer/dist/types/types-internal';

export const arrayOfObjectsToObject = <Data = AnyObject>(
  arr: AnyObject[],
  firstKey: string,
  secondKey: string | [string, string],
): Data =>
  Object.assign(
    {},
    ...arr.map((item) => ({
      [item[firstKey]]: Array.isArray(secondKey)
        ? (item[secondKey[0]] as AnyObject)[secondKey[1]]
        : item[secondKey],
    })),
  ) as Data;
