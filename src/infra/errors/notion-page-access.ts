export class NotionPageAccessError extends Error {
  constructor(pageId: string) {
    super(`Can not read Notion Page of id ${pageId}. Is it open for public reading?`);
    this.name = 'NotionPageAccessError';
  }
}
