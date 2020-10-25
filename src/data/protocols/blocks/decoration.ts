export type Decoration = {
  type: DecorationType;
  value?: string;
};

export type DecorationType =
  | 'plain'
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strikethrough'
  | 'link'
  | 'code'
  | 'color'
  | 'equation';
