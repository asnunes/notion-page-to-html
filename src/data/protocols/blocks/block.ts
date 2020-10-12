import { DecorableText } from './decorable-text';
import { Format } from './format';

export type Block = {
  id: string;
  type: string;
  children: Block[];
  properties: Record<string, any>;
  format: Format;
  decorableTexts: DecorableText[];
};
