import { PageChunkValidator } from './index';

describe('PageChunkValidator', () => {
  const makeSut = () => new PageChunkValidator();

  let sut: PageChunkValidator;
  beforeEach(() => {
    sut = makeSut();
  });

  it('should not return an error if status is 200', () => {
    const error = sut.validate('any_id', 200);

    expect(error).toBeNull();
  });

  it('should return NotionPageAccessError error if status is 401', () => {
    const error = sut.validate('any_id', 401);

    expect(error?.name).toBe('NotionPageAccessError');
  });

  it('should return NotionPageAccessError error if status is 403', () => {
    const error = sut.validate('any_id', 403);

    expect(error?.name).toBe('NotionPageAccessError');
  });

  it('should return NotionPageNotFound error if status is 404', () => {
    const error = sut.validate('any_id', 404);

    expect(error?.name).toBe('NotionPageNotFound');
  });
});
