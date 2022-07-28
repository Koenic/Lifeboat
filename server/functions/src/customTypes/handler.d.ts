import { Response, Request } from 'express';

type HttpsRequest<T> = Omit<Request, 'body'> & T;
export type Handler<T, S> = (
  req: HttpsRequest<T>,
  res: Response<S>
) => Promise<void>;
