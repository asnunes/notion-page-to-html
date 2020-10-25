export class PropertiesParser {
  private readonly _format: Record<string, any>;
  private readonly _properties: Record<string, any>;

  constructor(format: Record<string, any> | undefined, properties: Record<string, any> | undefined) {
    this._format = format || {};
    this._properties = properties || {};
  }

  parse(): Record<string, any> {
    const avaliableKeys = Object.keys({ ...this._format, ...this._properties }).filter((k) =>
      KEYS_TO_PRESERVE.includes(k),
    );

    return avaliableKeys.reduce<Record<string, any>>(
      (format, key) => ({
        ...format,
        [key]: this._properties[key]?.[0]?.[0] || this._format[key],
      }),
      {},
    );
  }
}

const KEYS_TO_PRESERVE = ['source', 'caption', 'language', 'checked', 'page_icon', 'page_cover'];
