// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Countries extends APIResource {
  /**
   * Retrieve voice dialing country permissions identified by the given ISO country
   * code
   */
  retrieve(isoCode: string, options?: RequestOptions): APIPromise<CountryRetrieveResponse> {
    return this._client.get(path`/v1/DialingPermissions/Countries/${isoCode}`, options);
  }

  /**
   * Retrieve all voice dialing country permissions for this account
   */
  list(
    query: CountryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CountryListResponse> {
    return this._client.get('/v1/DialingPermissions/Countries', { query, ...options });
  }

  /**
   * Fetch the high-risk special services prefixes from the country resource
   * corresponding to the
   * [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   */
  fetchHighRiskSpecialPrefixes(
    isoCode: string,
    query: CountryFetchHighRiskSpecialPrefixesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CountryFetchHighRiskSpecialPrefixesResponse> {
    return this._client.get(path`/v1/DialingPermissions/Countries/${isoCode}/HighRiskSpecialPrefixes`, {
      query,
      ...options,
    });
  }
}

export interface CountryRetrieveResponse {
  /**
   * The name of the continent in which the country is located.
   */
  continent?: string | null;

  /**
   * The E.164 assigned
   * [country codes(s)](https://www.itu.int/itudoc/itu-t/ob-lists/icc/e164_763.html)
   */
  country_codes?: Array<string> | null;

  /**
   * Whether dialing to high-risk special services numbers is enabled. These prefixes
   * include number ranges allocated by the country and include premium numbers,
   * special services, shared cost, and others
   */
  high_risk_special_numbers_enabled?: boolean | null;

  /**
   * Whether dialing to high-risk
   * [toll fraud](https://www.twilio.com/blog/how-to-protect-your-account-from-toll-fraud-with-voice-dialing-geo-permissions-html)
   * numbers is enabled. These prefixes include narrow number ranges that have a
   * high-risk of international revenue sharing fraud (IRSF) attacks, also known as
   * [toll fraud](https://www.twilio.com/blog/how-to-protect-your-account-from-toll-fraud-with-voice-dialing-geo-permissions-html).
   * These prefixes are collected from anti-fraud databases and verified by analyzing
   * calls on our network. These prefixes are not available for download and are
   * updated frequently
   */
  high_risk_tollfraud_numbers_enabled?: boolean | null;

  /**
   * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
   */
  iso_code?: string | null;

  /**
   * A list of URLs related to this resource.
   */
  links?: unknown | null;

  /**
   * Whether dialing to low-risk numbers is enabled.
   */
  low_risk_numbers_enabled?: boolean | null;

  /**
   * The name of the country.
   */
  name?: string | null;

  /**
   * The absolute URL of this resource.
   */
  url?: string | null;
}

export interface CountryListResponse {
  content?: Array<CountryListResponse.Content>;

  meta?: CountryListResponse.Meta;
}

export namespace CountryListResponse {
  export interface Content {
    /**
     * The name of the continent in which the country is located.
     */
    continent?: string | null;

    /**
     * The E.164 assigned
     * [country codes(s)](https://www.itu.int/itudoc/itu-t/ob-lists/icc/e164_763.html)
     */
    country_codes?: Array<string> | null;

    /**
     * Whether dialing to high-risk special services numbers is enabled. These prefixes
     * include number ranges allocated by the country and include premium numbers,
     * special services, shared cost, and others
     */
    high_risk_special_numbers_enabled?: boolean | null;

    /**
     * Whether dialing to high-risk
     * [toll fraud](https://www.twilio.com/blog/how-to-protect-your-account-from-toll-fraud-with-voice-dialing-geo-permissions-html)
     * numbers is enabled. These prefixes include narrow number ranges that have a
     * high-risk of international revenue sharing fraud (IRSF) attacks, also known as
     * [toll fraud](https://www.twilio.com/blog/how-to-protect-your-account-from-toll-fraud-with-voice-dialing-geo-permissions-html).
     * These prefixes are collected from anti-fraud databases and verified by analyzing
     * calls on our network. These prefixes are not available for download and are
     * updated frequently
     */
    high_risk_tollfraud_numbers_enabled?: boolean | null;

    /**
     * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     */
    iso_code?: string | null;

    /**
     * A list of URLs related to this resource.
     */
    links?: unknown | null;

    /**
     * Whether dialing to low-risk numbers is enabled.
     */
    low_risk_numbers_enabled?: boolean | null;

    /**
     * The name of the country.
     */
    name?: string | null;

    /**
     * The absolute URL of this resource.
     */
    url?: string | null;
  }

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

export interface CountryFetchHighRiskSpecialPrefixesResponse {
  content?: Array<CountryFetchHighRiskSpecialPrefixesResponse.Content>;

  meta?: CountryFetchHighRiskSpecialPrefixesResponse.Meta;
}

export namespace CountryFetchHighRiskSpecialPrefixesResponse {
  export interface Content {
    /**
     * A prefix is a contiguous number range for a block of E.164 numbers that includes
     * the E.164 assigned country code. For example, a North American Numbering Plan
     * prefix like `+1510720` written like `+1(510) 720` matches all numbers inclusive
     * from `+1(510) 720-0000` to `+1(510) 720-9999`.
     */
    prefix?: string | null;
  }

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

export interface CountryListParams {
  /**
   * Filter to retrieve the country permissions by specifying the continent
   */
  Continent?: string;

  /**
   * Filter the results by specified
   * [country codes](https://www.itu.int/itudoc/itu-t/ob-lists/icc/e164_763.html)
   */
  CountryCode?: string;

  /**
   * Filter to retrieve the country permissions with dialing to high-risk special
   * service numbers enabled. Can be: `true` or `false`
   */
  HighRiskSpecialNumbersEnabled?: boolean;

  /**
   * Filter to retrieve the country permissions with dialing to high-risk
   * [toll fraud](https://www.twilio.com/blog/how-to-protect-your-account-from-toll-fraud-with-voice-dialing-geo-permissions-html)
   * numbers enabled. Can be: `true` or `false`.
   */
  HighRiskTollfraudNumbersEnabled?: boolean;

  /**
   * Filter to retrieve the country permissions by specifying the
   * [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   */
  IsoCode?: string;

  /**
   * Filter to retrieve the country permissions with dialing to low-risk numbers
   * enabled. Can be: `true` or `false`.
   */
  LowRiskNumbersEnabled?: boolean;

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

export interface CountryFetchHighRiskSpecialPrefixesParams {
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

export declare namespace Countries {
  export {
    type CountryRetrieveResponse as CountryRetrieveResponse,
    type CountryListResponse as CountryListResponse,
    type CountryFetchHighRiskSpecialPrefixesResponse as CountryFetchHighRiskSpecialPrefixesResponse,
    type CountryListParams as CountryListParams,
    type CountryFetchHighRiskSpecialPrefixesParams as CountryFetchHighRiskSpecialPrefixesParams,
  };
}
