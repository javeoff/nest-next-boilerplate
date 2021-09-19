export const objectToCss = (style: Record<string, string>): string =>
  Object.keys(style).reduce(
    (acc, key) =>
      acc +
      `${key
        .split(/(?=[A-Z])/)
        .join('-')
        .toLowerCase()}:${style[key]};`,
    '',
  );
