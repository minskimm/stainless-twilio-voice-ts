// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Archives extends APIResource {
  /**
   * Delete an archived call record from Bulk Export. Note: this does not also delete
   * the record from the Voice API.
   */
  deleteCall(sid: string, params: ArchiveDeleteCallParams, options?: RequestOptions): APIPromise<void> {
    const { Date } = params;
    return this._client.delete(path`/v1/Archives/${Date}/Calls/${sid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ArchiveDeleteCallParams {
  /**
   * The date of the Call in UTC.
   */
  Date: string;
}

export declare namespace Archives {
  export { type ArchiveDeleteCallParams as ArchiveDeleteCallParams };
}
