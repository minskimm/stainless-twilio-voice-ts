// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SourceIPMappings extends APIResource {
  create(body: SourceIPMappingCreateParams, options?: RequestOptions): APIPromise<SourceIPMapping> {
    return this._client.post('/v1/SourceIpMappings', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  retrieve(sid: string, options?: RequestOptions): APIPromise<SourceIPMapping> {
    return this._client.get(path`/v1/SourceIpMappings/${sid}`, options);
  }

  update(
    sid: string,
    body: SourceIPMappingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SourceIPMapping> {
    return this._client.post(path`/v1/SourceIpMappings/${sid}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  list(
    query: SourceIPMappingListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SourceIPMappingListResponse> {
    return this._client.get('/v1/SourceIpMappings', { query, ...options });
  }

  delete(sid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/SourceIpMappings/${sid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SourceIPMapping {
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
   * The Twilio-provided string that uniquely identifies the IP Record resource to
   * map from.
   */
  ip_record_sid?: string | null;

  /**
   * The unique string that we created to identify the IP Record resource.
   */
  sid?: string | null;

  /**
   * The SID of the SIP Domain that the IP Record is mapped to.
   */
  sip_domain_sid?: string | null;

  /**
   * The absolute URL of the resource.
   */
  url?: string | null;
}

export interface SourceIPMappingListResponse {
  meta?: SourceIPMappingListResponse.Meta;

  source_ip_mappings?: Array<SourceIPMapping>;
}

export namespace SourceIPMappingListResponse {
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

export interface SourceIPMappingCreateParams {
  /**
   * The Twilio-provided string that uniquely identifies the IP Record resource to
   * map from.
   */
  IpRecordSid: string;

  /**
   * The SID of the SIP Domain that the IP Record should be mapped to.
   */
  SipDomainSid: string;
}

export interface SourceIPMappingUpdateParams {
  /**
   * The SID of the SIP Domain that the IP Record should be mapped to.
   */
  SipDomainSid: string;
}

export interface SourceIPMappingListParams {
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

export declare namespace SourceIPMappings {
  export {
    type SourceIPMapping as SourceIPMapping,
    type SourceIPMappingListResponse as SourceIPMappingListResponse,
    type SourceIPMappingCreateParams as SourceIPMappingCreateParams,
    type SourceIPMappingUpdateParams as SourceIPMappingUpdateParams,
    type SourceIPMappingListParams as SourceIPMappingListParams,
  };
}
