// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TwilioVoiceOpenAPI from 'stainless-twilio-voice';

export const metadata: Metadata = {
  resource: 'dialing_permissions',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_bulk_country_updates_dialing_permissions',
  description:
    'Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)',
  inputSchema: {
    type: 'object',
    properties: {
      UpdateRequest: {
        type: 'string',
        description:
          'URL encoded JSON array of update objects. example : `[ { "iso_code": "GB", "low_risk_numbers_enabled": "true", "high_risk_special_numbers_enabled":"true", "high_risk_tollfraud_numbers_enabled": "false" } ]`',
      },
    },
  },
};

export const handler = (client: TwilioVoiceOpenAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.dialingPermissions.createBulkCountryUpdates(body);
};

export default { metadata, tool, handler };
