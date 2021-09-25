declare module '*.svg' {
  import { FC, SVGProps } from 'react';

  /**
   * Реакт компонент, созданный из svg.
   */
  export const ReactComponent: FC<SVGProps<SVGSVGElement>>;

  const defaultValue: string;

  /**
   * Svg в виде base64 строки.
   */
  export default defaultValue;
}

declare module '*.png' {
  const value: string;

  /**
   * Путь до png файла.
   */
  export default value;
}

declare module '*.jpeg' {
  const value: string;

  /**
   * Путь до jpeg файла.
   */
  export default value;
}

declare module '*.woff2' {
  const value: string;

  /**
   * Путь до woff2 файла.
   */
  export default value;
}

declare module 'raw-loader!*' {
  const value: string;

  /**
   * Содержимое файла в виде строки.
   */
  export default value;
}
