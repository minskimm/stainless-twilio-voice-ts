// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Targets extends APIResource {
  create(
    connectionPolicySid: string,
    body: TargetCreateParams,
    options?: RequestOptions,
  ): APIPromise<ConnectionPolicyTarget> {
    return this._client.post(path`/v1/ConnectionPolicies/${connectionPolicySid}/Targets`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  retrieve(
    sid: string,
    params: TargetRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ConnectionPolicyTarget> {
    const { ConnectionPolicySid } = params;
    return this._client.get(path`/v1/ConnectionPolicies/${ConnectionPolicySid}/Targets/${sid}`, options);
  }

  update(
    sid: string,
    params: TargetUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ConnectionPolicyTarget> {
    const { ConnectionPolicySid, ...body } = params;
    return this._client.post(path`/v1/ConnectionPolicies/${ConnectionPolicySid}/Targets/${sid}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  list(
    connectionPolicySid: string,
    query: TargetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TargetListResponse> {
    return this._client.get(path`/v1/ConnectionPolicies/${connectionPolicySid}/Targets`, {
      query,
      ...options,
    });
  }

  delete(sid: string, params: TargetDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { ConnectionPolicySid } = params;
    return this._client.delete(path`/v1/ConnectionPolicies/${ConnectionPolicySid}/Targets/${sid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ConnectionPolicyTarget {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that
   * created the Target resource.
   */
  account_sid?: string | null;

  /**
   * The SID of the Connection Policy that owns the Target.
   */
  connection_policy_sid?: string | null;

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
   * Whether the target is enabled. The default is `true`.
   */
  enabled?: boolean | null;

  /**
   * The string that you assigned to describe the resource.
   */
  friendly_name?: string | null;

  /**
   * The relative importance of the target. Can be an integer from 0 to 65535,
   * inclusive, and the default is 10. The lowest number represents the most
   * important target.
   */
  priority?: number;

  /**
   * The unique string that we created to identify the Target resource.
   */
  sid?: string | null;

  /**
   * The SIP address you want Twilio to route your calls to. This must be a `sip:`
   * schema. `sips` is NOT supported.
   */
  target?: string | null;

  /**
   * The absolute URL of the resource.
   */
  url?: string | null;

  /**
   * The value that determines the relative share of the load the Target should
   * receive compared to other Targets with the same priority. Can be an integer from
   * 1 to 65535, inclusive, and the default is 10. Targets with higher values receive
   * more load than those with lower ones with the same priority.
   */
  weight?: number;
}

export interface TargetListResponse {
  meta?: TargetListResponse.Meta;

  targets?: Array<ConnectionPolicyTarget>;
}

export namespace TargetListResponse {
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

export interface TargetCreateParams {
  /**
   * The SIP address you want Twilio to route your calls to. This must be a `sip:`
   * schema. `sips` is NOT supported.
   */
  Target: string;

  /**
   * Whether the Target is enabled. The default is `true`.
   */
  Enabled?: boolean;

  /**
   * A descriptive string that you create to describe the resource. It is not unique
   * and can be up to 255 characters long.
   */
  FriendlyName?: string;

  /**
   * The relative importance of the target. Can be an integer from 0 to 65535,
   * inclusive, and the default is 10. The lowest number represents the most
   * important target.
   */
  Priority?: number;

  /**
   * The value that determines the relative share of the load the Target should
   * receive compared to other Targets with the same priority. Can be an integer from
   * 1 to 65535, inclusive, and the default is 10. Targets with higher values receive
   * more load than those with lower ones with the same priority.
   */
  Weight?: number;
}

export interface TargetRetrieveParams {
  /**
   * The SID of the Connection Policy that owns the Target.
   */
  ConnectionPolicySid: string;
}

export interface TargetUpdateParams {
  /**
   * Path param: The SID of the Connection Policy that owns the Target.
   */
  ConnectionPolicySid: string;

  /**
   * Body param: Whether the Target is enabled.
   */
  Enabled?: boolean;

  /**
   * Body param: A descriptive string that you create to describe the resource. It is
   * not unique and can be up to 255 characters long.
   */
  FriendlyName?: string;

  /**
   * Body param: The relative importance of the target. Can be an integer from 0 to
   * 65535, inclusive. The lowest number represents the most important target.
   */
  Priority?: number;

  /**
   * Body param: The SIP address you want Twilio to route your calls to. This must be
   * a `sip:` schema. `sips` is NOT supported.
   */
  Target?: string;

  /**
   * Body param: The value that determines the relative share of the load the Target
   * should receive compared to other Targets with the same priority. Can be an
   * integer from 1 to 65535, inclusive. Targets with higher values receive more load
   * than those with lower ones with the same priority.
   */
  Weight?: number;
}

export interface TargetListParams {
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

export interface TargetDeleteParams {
  /**
   * The SID of the Connection Policy that owns the Target.
   */
  ConnectionPolicySid: string;
}

export declare namespace Targets {
  export {
    type ConnectionPolicyTarget as ConnectionPolicyTarget,
    type TargetListResponse as TargetListResponse,
    type TargetCreateParams as TargetCreateParams,
    type TargetRetrieveParams as TargetRetrieveParams,
    type TargetUpdateParams as TargetUpdateParams,
    type TargetListParams as TargetListParams,
    type TargetDeleteParams as TargetDeleteParams,
  };
}
