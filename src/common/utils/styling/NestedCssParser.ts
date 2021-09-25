type TNestedCssType = 'owned' | 'nested';

export class NestedCssParser {
  protected readonly css: string;
  protected readonly routePrefix: string;

  public constructor(css: string, routePrefix: string) {
    if (!css) {
      throw new Error(
        'Selectors is missing in the instance of NestedCssParser',
      );
    }

    this.css = css;
    this.routePrefix = routePrefix;
  }

  private static nestCss(
    selectorText: string,
    routePrefix: string,
    nestedCssType: TNestedCssType,
  ): string {
    switch (nestedCssType) {
      case 'owned':
        return `.${routePrefix}{${selectorText}}`;
      case 'nested':
      default:
        return `.${routePrefix}${selectorText}`;
    }
  }

  private get clearedCss(): string {
    return this.css.replace(/\n/g, '').replace(/ +/g, '').trim();
  }

  private get ownedSelectorCss(): string {
    return this.clearedCss.replace(/([^ ;{]+){([^}]+)}/g, '');
  }

  private sliceSelectors(): string[] {
    return [...this.clearedCss.matchAll(/([^ ;{]+){([^}]+)}/g)].map(
      (matchItem) => matchItem[0],
    );
  }

  public parse(): string {
    const ownedSelector = NestedCssParser.nestCss(
      this.ownedSelectorCss,
      this.routePrefix,
      'owned',
    );

    const nestedSelectors = this.sliceSelectors()
      .map((selector) =>
        NestedCssParser.nestCss(selector, this.routePrefix, 'nested'),
      )
      .join(' ');

    return [ownedSelector, nestedSelectors].join(' ');
  }
}
