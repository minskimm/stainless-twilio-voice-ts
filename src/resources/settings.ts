// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Settings extends APIResource {
  /**
   * Retrieve voice dialing permissions inheritance for the sub-account
   */
  retrieve(options?: RequestOptions): APIPromise<DialingPermissions> {
    return this._client.get('/v1/Settings', options);
  }

  /**
   * Update voice dialing permissions inheritance for the sub-account
   */
  update(
    body: SettingUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DialingPermissions> {
    return this._client.post('/v1/Settings', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }
}

export interface DialingPermissions {
  /**
   * `true` if the sub-account will inherit voice dialing permissions from the Master
   * Project; otherwise `false`.
   */
  dialing_permissions_inheritance?: boolean | null;

  /**
   * The absolute URL of this resource.
   */
  url?: string | null;
}

export interface SettingUpdateParams {
  /**
   * `true` for the sub-account to inherit voice dialing permissions from the Master
   * Project; otherwise `false`.
   */
  DialingPermissionsInheritance?: boolean;
}

export declare namespace Settings {
  export { type DialingPermissions as DialingPermissions, type SettingUpdateParams as SettingUpdateParams };
}
