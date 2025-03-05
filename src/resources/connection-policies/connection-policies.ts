// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TargetsAPI from './targets';
import {
  ConnectionPolicyTarget,
  TargetCreateParams,
  TargetDeleteParams,
  TargetListParams,
  TargetListResponse,
  TargetRetrieveParams,
  TargetUpdateParams,
  Targets,
} from './targets';
import { APIPromise } from '../../api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ConnectionPolicies extends APIResource {
  targets: TargetsAPI.Targets = new TargetsAPI.Targets(this._client);

  create(
    body: ConnectionPolicyCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConnectionPolicy> {
    return this._client.post('/v1/ConnectionPolicies', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  retrieve(sid: string, options?: RequestOptions): APIPromise<ConnectionPolicy> {
    return this._client.get(path`/v1/ConnectionPolicies/${sid}`, options);
  }

  update(
    sid: string,
    body: ConnectionPolicyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConnectionPolicy> {
    return this._client.post(path`/v1/ConnectionPolicies/${sid}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  list(
    query: ConnectionPolicyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConnectionPolicyListResponse> {
    return this._client.get('/v1/ConnectionPolicies', { query, ...options });
  }

  delete(sid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/ConnectionPolicies/${sid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ConnectionPolicy {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that
   * created the Connection Policy resource.
   */
  account_sid?: string | null;

  /**
   * The date and time in GMT when the resource was created specified in
   * [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  date_created?: string | null;

  /**
   * The date and time in GMT when the resource was last updated specified in
   * [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  date_updated?: string | null;

  /**
   * The string that you assigned to describe the resource.
   */
  friendly_name?: string | null;

  /**
   * The URLs of related resources.
   */
  links?: unknown | null;

  /**
   * The unique string that we created to identify the Connection Policy resource.
   */
  sid?: string | null;

  /**
   * The absolute URL of the resource.
   */
  url?: string | null;
}

export interface ConnectionPolicyListResponse {
  connection_policies?: Array<ConnectionPolicy>;

  meta?: ConnectionPolicyListResponse.Meta;
}

export namespace ConnectionPolicyListResponse {
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

export interface ConnectionPolicyCreateParams {
  /**
   * A descriptive string that you create to describe the resource. It is not unique
   * and can be up to 255 characters long.
   */
  FriendlyName?: string;
}

export interface ConnectionPolicyUpdateParams {
  /**
   * A descriptive string that you create to describe the resource. It is not unique
   * and can be up to 255 characters long.
   */
  FriendlyName?: string;
}

export interface ConnectionPolicyListParams {
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

ConnectionPolicies.Targets = Targets;

export declare namespace ConnectionPolicies {
  export {
    type ConnectionPolicy as ConnectionPolicy,
    type ConnectionPolicyListResponse as ConnectionPolicyListResponse,
    type ConnectionPolicyCreateParams as ConnectionPolicyCreateParams,
    type ConnectionPolicyUpdateParams as ConnectionPolicyUpdateParams,
    type ConnectionPolicyListParams as ConnectionPolicyListParams,
  };

  export {
    Targets as Targets,
    type ConnectionPolicyTarget as ConnectionPolicyTarget,
    type TargetListResponse as TargetListResponse,
    type TargetCreateParams as TargetCreateParams,
    type TargetRetrieveParams as TargetRetrieveParams,
    type TargetUpdateParams as TargetUpdateParams,
    type TargetListParams as TargetListParams,
    type TargetDeleteParams as TargetDeleteParams,
  };
}
