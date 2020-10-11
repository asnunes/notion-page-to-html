import { DecorableText } from './decorable-text';

export type Block = {
  id: string;
  type: string;
  children: Block[];
  properties: Record<string, any>;
  format: Record<string, any>;
  decorableTexts: DecorableText[];
};
