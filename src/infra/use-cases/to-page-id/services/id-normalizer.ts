export class IdNormalizer {
  normalizeId(id: string): string {
    const isItAlreadyNormalized = id.length === 36;
    return isItAlreadyNormalized
      ? id
      : `${id.substr(0, 8)}-${id.substr(8, 4)}-${id.substr(12, 4)}-${id.substr(16, 4)}-${id.substr(20)}`;
  }
}
