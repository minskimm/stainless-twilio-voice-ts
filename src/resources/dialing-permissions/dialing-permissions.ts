// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CountriesAPI from './countries';
import {
  Countries,
  CountryFetchHighRiskSpecialPrefixesParams,
  CountryFetchHighRiskSpecialPrefixesResponse,
  CountryListParams,
  CountryListResponse,
  CountryRetrieveResponse,
} from './countries';
import { APIPromise } from '../../api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class DialingPermissions extends APIResource {
  countries: CountriesAPI.Countries = new CountriesAPI.Countries(this._client);

  /**
   * Create a bulk update request to change voice dialing country permissions of one
   * or more countries identified by the corresponding
   * [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   */
  createBulkCountryUpdates(
    body: DialingPermissionCreateBulkCountryUpdatesParams,
    options?: RequestOptions,
  ): APIPromise<DialingPermissionCreateBulkCountryUpdatesResponse> {
    return this._client.post('/v1/DialingPermissions/BulkCountryUpdates', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }
}

export interface DialingPermissionCreateBulkCountryUpdatesResponse {
  /**
   * The number of countries updated
   */
  update_count?: number;

  /**
   * A bulk update request to change voice dialing country permissions stored as a
   * URL-encoded, JSON array of update objects. For example :
   * `[ { "iso_code": "GB", "low_risk_numbers_enabled": "true", "high_risk_special_numbers_enabled":"true", "high_risk_tollfraud_numbers_enabled": "false" } ]`
   */
  update_request?: string | null;
}

export interface DialingPermissionCreateBulkCountryUpdatesParams {
  /**
   * URL encoded JSON array of update objects. example :
   * `[ { "iso_code": "GB", "low_risk_numbers_enabled": "true", "high_risk_special_numbers_enabled":"true", "high_risk_tollfraud_numbers_enabled": "false" } ]`
   */
  UpdateRequest: string;
}

DialingPermissions.Countries = Countries;

export declare namespace DialingPermissions {
  export {
    type DialingPermissionCreateBulkCountryUpdatesResponse as DialingPermissionCreateBulkCountryUpdatesResponse,
    type DialingPermissionCreateBulkCountryUpdatesParams as DialingPermissionCreateBulkCountryUpdatesParams,
  };

  export {
    Countries as Countries,
    type CountryRetrieveResponse as CountryRetrieveResponse,
    type CountryListResponse as CountryListResponse,
    type CountryFetchHighRiskSpecialPrefixesResponse as CountryFetchHighRiskSpecialPrefixesResponse,
    type CountryListParams as CountryListParams,
    type CountryFetchHighRiskSpecialPrefixesParams as CountryFetchHighRiskSpecialPrefixesParams,
  };
}
