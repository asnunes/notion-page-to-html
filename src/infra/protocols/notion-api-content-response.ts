export type NotionApiContentResponse = {
  id: string;
  type: string;
  properties: Record<string, any>;
  format?: Record<string, any>;
  contents: NotionApiContentResponse[];
};
