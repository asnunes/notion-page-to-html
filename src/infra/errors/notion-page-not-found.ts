export class NotionPageNotFound extends Error {
  constructor(pageId: string) {
    super(
      `Can not find Notion Page of id ${pageId}. Is the url correct? It is the original page or a redirect page (not supported)?`,
    );
    this.name = 'NotionPageNotFound';
  }
}
