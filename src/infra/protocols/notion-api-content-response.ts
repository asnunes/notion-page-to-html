export type NotionApiContentResponse = {
  id: string;
  title?: string;
  type: string;
  properties: Record<string, any>;
};
