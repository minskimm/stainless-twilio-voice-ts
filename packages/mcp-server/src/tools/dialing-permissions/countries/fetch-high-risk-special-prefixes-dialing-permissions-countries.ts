// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import TwilioVoiceOpenAPI from 'stainless-twilio-voice';

export const metadata: Metadata = {
  resource: 'dialing_permissions.countries',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'fetch_high_risk_special_prefixes_dialing_permissions_countries',
  description:
    'Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)',
  inputSchema: {
    type: 'object',
    properties: {
      IsoCode: {
        type: 'string',
      },
      Page: {
        type: 'integer',
        description: 'The page index. This value is simply for client state.',
      },
      PageSize: {
        type: 'integer',
        description:
          'How many resources to return in each list page. The default is 50, and the maximum is 1000.',
      },
      PageToken: {
        type: 'string',
        description: 'The page token. This is provided by the API.',
      },
    },
  },
};

export const handler = (client: TwilioVoiceOpenAPI, args: Record<string, unknown> | undefined) => {
  const { IsoCode, ...body } = args as any;
  return client.dialingPermissions.countries.fetchHighRiskSpecialPrefixes(IsoCode, body);
};

export default { metadata, tool, handler };
