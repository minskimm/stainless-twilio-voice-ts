// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ByocTrunks extends APIResource {
  create(
    body: ByocTrunkCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ByocTrunk> {
    return this._client.post('/v1/ByocTrunks', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  retrieve(sid: string, options?: RequestOptions): APIPromise<ByocTrunk> {
    return this._client.get(path`/v1/ByocTrunks/${sid}`, options);
  }

  update(
    sid: string,
    body: ByocTrunkUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ByocTrunk> {
    return this._client.post(path`/v1/ByocTrunks/${sid}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  list(
    query: ByocTrunkListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ByocTrunkListResponse> {
    return this._client.get('/v1/ByocTrunks', { query, ...options });
  }

  delete(sid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/ByocTrunks/${sid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ByocTrunk {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that
   * created the BYOC Trunk resource.
   */
  account_sid?: string | null;

  /**
   * Whether Caller ID Name (CNAM) lookup is enabled for the trunk. If enabled, all
   * inbound calls to the BYOC Trunk from the United States and Canada automatically
   * perform a CNAM Lookup and display Caller ID data on your phone. See
   * [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more
   * information.
   */
  cnam_lookup_enabled?: boolean | null;

  /**
   * The SID of the Connection Policy that Twilio will use when routing traffic to
   * your communications infrastructure.
   */
  connection_policy_sid?: string | null;

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
   * The SID of the SIP Domain that should be used in the `From` header of
   * originating calls sent to your SIP infrastructure. If your SIP infrastructure
   * allows users to "call back" an incoming call, configure this with a
   * [SIP Domain](https://www.twilio.com/docs/voice/api/sending-sip) to ensure proper
   * routing. If not configured, the from domain will default to "sip.twilio.com".
   */
  from_domain_sid?: string | null;

  /**
   * The unique string that that we created to identify the BYOC Trunk resource.
   */
  sid?: string | null;

  /**
   * The HTTP method we use to call `status_callback_url`. Either `GET` or `POST`.
   */
  status_callback_method?: 'GET' | 'POST' | null;

  /**
   * The URL that we call to pass status parameters (such as call ended) to your
   * application.
   */
  status_callback_url?: string | null;

  /**
   * The absolute URL of the resource.
   */
  url?: string | null;

  /**
   * The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
   */
  voice_fallback_method?: 'GET' | 'POST' | null;

  /**
   * The URL that we call when an error occurs while retrieving or executing the
   * TwiML requested from `voice_url`.
   */
  voice_fallback_url?: string | null;

  /**
   * The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`.
   */
  voice_method?: 'GET' | 'POST' | null;

  /**
   * The URL we call using the `voice_method` when the BYOC Trunk receives a call.
   */
  voice_url?: string | null;
}

export interface ByocTrunkListResponse {
  byoc_trunks?: Array<ByocTrunk>;

  meta?: ByocTrunkListResponse.Meta;
}

export namespace ByocTrunkListResponse {
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

export interface ByocTrunkCreateParams {
  /**
   * Whether Caller ID Name (CNAM) lookup is enabled for the trunk. If enabled, all
   * inbound calls to the BYOC Trunk from the United States and Canada automatically
   * perform a CNAM Lookup and display Caller ID data on your phone. See
   * [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more
   * information.
   */
  CnamLookupEnabled?: boolean;

  /**
   * The SID of the Connection Policy that Twilio will use when routing traffic to
   * your communications infrastructure.
   */
  ConnectionPolicySid?: string;

  /**
   * A descriptive string that you create to describe the resource. It is not unique
   * and can be up to 255 characters long.
   */
  FriendlyName?: string;

  /**
   * The SID of the SIP Domain that should be used in the `From` header of
   * originating calls sent to your SIP infrastructure. If your SIP infrastructure
   * allows users to "call back" an incoming call, configure this with a
   * [SIP Domain](https://www.twilio.com/docs/voice/api/sending-sip) to ensure proper
   * routing. If not configured, the from domain will default to "sip.twilio.com".
   */
  FromDomainSid?: string;

  /**
   * The HTTP method we should use to call `status_callback_url`. Can be: `GET` or
   * `POST`.
   */
  StatusCallbackMethod?: 'GET' | 'POST';

  /**
   * The URL that we should call to pass status parameters (such as call ended) to
   * your application.
   */
  StatusCallbackUrl?: string;

  /**
   * The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or
   * `POST`.
   */
  VoiceFallbackMethod?: 'GET' | 'POST';

  /**
   * The URL that we should call when an error occurs while retrieving or executing
   * the TwiML from `voice_url`.
   */
  VoiceFallbackUrl?: string;

  /**
   * The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`.
   */
  VoiceMethod?: 'GET' | 'POST';

  /**
   * The URL we should call when the BYOC Trunk receives a call.
   */
  VoiceUrl?: string;
}

export interface ByocTrunkUpdateParams {
  /**
   * Whether Caller ID Name (CNAM) lookup is enabled for the trunk. If enabled, all
   * inbound calls to the BYOC Trunk from the United States and Canada automatically
   * perform a CNAM Lookup and display Caller ID data on your phone. See
   * [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more
   * information.
   */
  CnamLookupEnabled?: boolean;

  /**
   * The SID of the Connection Policy that Twilio will use when routing traffic to
   * your communications infrastructure.
   */
  ConnectionPolicySid?: string;

  /**
   * A descriptive string that you create to describe the resource. It is not unique
   * and can be up to 255 characters long.
   */
  FriendlyName?: string;

  /**
   * The SID of the SIP Domain that should be used in the `From` header of
   * originating calls sent to your SIP infrastructure. If your SIP infrastructure
   * allows users to "call back" an incoming call, configure this with a
   * [SIP Domain](https://www.twilio.com/docs/voice/api/sending-sip) to ensure proper
   * routing. If not configured, the from domain will default to "sip.twilio.com".
   */
  FromDomainSid?: string;

  /**
   * The HTTP method we should use to call `status_callback_url`. Can be: `GET` or
   * `POST`.
   */
  StatusCallbackMethod?: 'GET' | 'POST';

  /**
   * The URL that we should call to pass status parameters (such as call ended) to
   * your application.
   */
  StatusCallbackUrl?: string;

  /**
   * The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or
   * `POST`.
   */
  VoiceFallbackMethod?: 'GET' | 'POST';

  /**
   * The URL that we should call when an error occurs while retrieving or executing
   * the TwiML requested by `voice_url`.
   */
  VoiceFallbackUrl?: string;

  /**
   * The HTTP method we should use to call `voice_url`
   */
  VoiceMethod?: 'GET' | 'POST';

  /**
   * The URL we should call when the BYOC Trunk receives a call.
   */
  VoiceUrl?: string;
}

export interface ByocTrunkListParams {
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

export declare namespace ByocTrunks {
  export {
    type ByocTrunk as ByocTrunk,
    type ByocTrunkListResponse as ByocTrunkListResponse,
    type ByocTrunkCreateParams as ByocTrunkCreateParams,
    type ByocTrunkUpdateParams as ByocTrunkUpdateParams,
    type ByocTrunkListParams as ByocTrunkListParams,
  };
}
