import { IS_SERVER } from '@common/utils/constants';
import { NestedCssParser } from '@common/utils/styling/NestedCssParser';

const historyCss: string[] = [];

export const generateCss = (
  css: TemplateStringsArray,
  routePrefix = '',
): void => {
  const cssText = String(css[0]);

  const styleElement = !IS_SERVER && document.querySelector('style');

  if (!styleElement) {
    return;
  }

  const parsedCss = new NestedCssParser(cssText, routePrefix).parse();

  historyCss.push(styleElement.innerHTML, parsedCss);
  const updatedCss = historyCss.join(' ');

  window.addEventListener('load', () => {
    styleElement.innerHTML = updatedCss;
  });
};
