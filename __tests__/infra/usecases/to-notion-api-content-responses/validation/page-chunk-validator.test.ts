import { PageChunkValidator } from '../../../../../src/infra/usecases/to-notion-api-content-responses/validation/page-chunk';

describe('PageChunkValidator', () => {
  it('should not return an error if status is 200', () => {
    const sut = new PageChunkValidator('any_id', 200);

    const error = sut.validate();

    expect(error).toBeNull();
  });

  it('should return NotionPageAccessError error if status is 401', () => {
    const sut = new PageChunkValidator('any_id', 401);

    const error = sut.validate();

    expect(error?.name).toBe('NotionPageAccessError');
  });

  it('should return NotionPageAccessError error if status is 403', () => {
    const sut = new PageChunkValidator('any_id', 403);

    const error = sut.validate();

    expect(error?.name).toBe('NotionPageAccessError');
  });

  it('should return NotionPageNotFound error if status is 404', () => {
    const sut = new PageChunkValidator('any_id', 404);

    const error = sut.validate();

    expect(error?.name).toBe('NotionPageNotFound');
  });

  it('should return NotionPageNotFound error if status is 400', () => {
    const sut = new PageChunkValidator('any_id', 400);

    const error = sut.validate();

    expect(error?.name).toBe('NotionPageNotFound');
  });
});
