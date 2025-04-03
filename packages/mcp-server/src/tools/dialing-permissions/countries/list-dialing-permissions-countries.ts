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
  name: 'list_dialing_permissions_countries',
  description: 'Retrieve all voice dialing country permissions for this account',
  inputSchema: {
    type: 'object',
    properties: {
      Continent: {
        type: 'string',
        description: 'Filter to retrieve the country permissions by specifying the continent',
      },
      CountryCode: {
        type: 'string',
        description:
          'Filter the results by specified [country codes](https://www.itu.int/itudoc/itu-t/ob-lists/icc/e164_763.html)',
      },
      HighRiskSpecialNumbersEnabled: {
        type: 'boolean',
        description:
          'Filter to retrieve the country permissions with dialing to high-risk special service numbers enabled. Can be: `true` or `false`',
      },
      HighRiskTollfraudNumbersEnabled: {
        type: 'boolean',
        description:
          'Filter to retrieve the country permissions with dialing to high-risk [toll fraud](https://www.twilio.com/blog/how-to-protect-your-account-from-toll-fraud-with-voice-dialing-geo-permissions-html) numbers enabled. Can be: `true` or `false`.',
      },
      IsoCode: {
        type: 'string',
        description:
          'Filter to retrieve the country permissions by specifying the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)',
      },
      LowRiskNumbersEnabled: {
        type: 'boolean',
        description:
          'Filter to retrieve the country permissions with dialing to low-risk numbers enabled. Can be: `true` or `false`.',
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

export const handler = (client: TwilioVoiceOpenAPI, args: any) => {
  const { ...body } = args;
  return client.dialingPermissions.countries.list(body);
};

export default { metadata, tool, handler };
