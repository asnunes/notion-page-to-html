export type NotionApiContentResponse = {
  id: string;
  type: string;
  properties: Record<string, any>;
  title?: string;
  format?: Record<string, any>;
};
