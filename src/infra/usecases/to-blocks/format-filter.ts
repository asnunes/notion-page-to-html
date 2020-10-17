export class FormatFilter {
  private readonly _format: Record<string, any>;

  constructor(format: Record<string, any> | undefined) {
    this._format = format || {};
  }

  filter(): Record<string, any> {
    const presentAcceptableKeys = Object.keys(this._format).filter((k) => acceptableKeys.includes(k));
    return presentAcceptableKeys.reduce<Record<string, any>>((filteredFormat, key) => {
      return {
        ...filteredFormat,
        [key]: this._format[key],
      };
    }, {} as Record<string, any>);
  }
}

const acceptableKeys: string[] = ['block_color', 'page_cover', 'page_cover_position'];
