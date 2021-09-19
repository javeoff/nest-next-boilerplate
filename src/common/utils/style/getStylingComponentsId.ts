import { v4 } from 'uuid';
import { useMemo } from 'react';

const initialParams = {
  id: 0,
};

export const getStylingComponentId = (): {
  id: string;
  prefix: string;
} => {
  const id = useMemo(() => v4(), []);

  initialParams.id += 1;

  return {
    id,
    prefix: String(`styling-${id}`),
  };
};
