import { IS_SERVER } from '@common/utils/constants';
import { NestedCssParser } from '@common/utils/style/NestedCssParser';

const historyCss = [];
const isDev = false;

export const generateCss = (
  css: TemplateStringsArray,
  routePrefix = '',
): void => {
  const cssText = String(css[0]);

  // eslint-disable-next-line no-console
  console.log(cssText);
  const styleElement = !IS_SERVER && document.querySelector('style');

  const parsedCss = new NestedCssParser(cssText, routePrefix).parse();

  // eslint-disable-next-line no-console
  console.log(parsedCss);

  historyCss.push(styleElement.innerHTML, parsedCss);
  const updatedCss = historyCss.join(' ');

  if (isDev) {
    styleElement.innerHTML = updatedCss;
  }

  if (!styleElement) {
    return;
  }

  window.addEventListener('load', () => {
    styleElement.innerHTML = updatedCss;
  });
};
