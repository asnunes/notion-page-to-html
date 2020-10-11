export type HttpResponse = {
  status: number;
  data: Record<string, any> | string;
  headers?: Record<string, string[]>;
};
