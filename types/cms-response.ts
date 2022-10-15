type Reference<T, R> = T extends 'get' ? R : string | null;
interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type Structure<T, P> = T extends 'get'
  ? { id: string } & DateType & Required<P>
  : T extends 'gets'
  ? GetsType<{ id: string } & DateType & Required<P>>
  : Partial<DateType> & (T extends 'patch' ? Partial<P> : P);

export type news<T='get'> = Structure<
T,
{
  /**
   * タイトル
   */
  title?: string
  /**
   * 内容
   */
  content?: string
}>


export interface EndPoints {
  get: {
    'news': news<'get'>
  }
  gets: {
    'news': news<'gets'>
  }
  post: {
    'news': news<'post'>
  }
  put: {
    'news': news<'put'>
  }
  patch: {
    'news': news<'patch'>
  }
}
