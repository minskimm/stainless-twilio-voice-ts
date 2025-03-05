// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class IPRecords extends APIResource {
  create(body: IPRecordCreateParams, options?: RequestOptions): APIPromise<IPRecord> {
    return this._client.post('/v1/IpRecords', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  retrieve(sid: string, options?: RequestOptions): APIPromise<IPRecord> {
    return this._client.get(path`/v1/IpRecords/${sid}`, options);
  }

  update(
    sid: string,
    body: IPRecordUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IPRecord> {
    return this._client.post(path`/v1/IpRecords/${sid}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  list(
    query: IPRecordListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IPRecordListResponse> {
    return this._client.get('/v1/IpRecords', { query, ...options });
  }

  delete(sid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/IpRecords/${sid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface IPRecord {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that
   * created the IP Record resource.
   */
  account_sid?: string | null;

  /**
   * An integer representing the length of the
   * [CIDR](https://tools.ietf.org/html/rfc4632) prefix to use with this IP address.
   * By default the entire IP address is used, which for IPv4 is value 32.
   */
  cidr_prefix_length?: number;

  /**
   * The date and time in GMT that the resource was created specified in
   * [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  date_created?: string | null;

  /**
   * The date and time in GMT that the resource was last updated specified in
   * [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  date_updated?: string | null;

  /**
   * The string that you assigned to describe the resource.
   */
  friendly_name?: string | null;

  /**
   * An IP address in dotted decimal notation, IPv4 only.
   */
  ip_address?: string | null;

  /**
   * The unique string that we created to identify the IP Record resource.
   */
  sid?: string | null;

  /**
   * The absolute URL of the resource.
   */
  url?: string | null;
}

export interface IPRecordListResponse {
  ip_records?: Array<IPRecord>;

  meta?: IPRecordListResponse.Meta;
}

export namespace IPRecordListResponse {
  export interface Meta {
    first_page_url?: string;

    key?: string;

    next_page_url?: string | null;

    page?: number;

    page_size?: number;

    previous_page_url?: string | null;

    url?: string;
  }
}

export interface IPRecordCreateParams {
  /**
   * An IP address in dotted decimal notation, IPv4 only.
   */
  IpAddress: string;

  /**
   * An integer representing the length of the
   * [CIDR](https://tools.ietf.org/html/rfc4632) prefix to use with this IP address.
   * By default the entire IP address is used, which for IPv4 is value 32.
   */
  CidrPrefixLength?: number;

  /**
   * A descriptive string that you create to describe the resource. It is not unique
   * and can be up to 255 characters long.
   */
  FriendlyName?: string;
}

export interface IPRecordUpdateParams {
  /**
   * A descriptive string that you create to describe the resource. It is not unique
   * and can be up to 255 characters long.
   */
  FriendlyName?: string;
}

export interface IPRecordListParams {
  /**
   * The page index. This value is simply for client state.
   */
  Page?: number;

  /**
   * How many resources to return in each list page. The default is 50, and the
   * maximum is 1000.
   */
  PageSize?: number;

  /**
   * The page token. This is provided by the API.
   */
  PageToken?: string;
}

export declare namespace IPRecords {
  export {
    type IPRecord as IPRecord,
    type IPRecordListResponse as IPRecordListResponse,
    type IPRecordCreateParams as IPRecordCreateParams,
    type IPRecordUpdateParams as IPRecordUpdateParams,
    type IPRecordListParams as IPRecordListParams,
  };
}
