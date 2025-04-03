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
  name: 'retrieve_dialing_permissions_countries',
  description: 'Retrieve voice dialing country permissions identified by the given ISO country code',
  inputSchema: {
    type: 'object',
    properties: {
      IsoCode: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: TwilioVoiceOpenAPI, args: any) => {
  const { IsoCode } = args;
  return client.dialingPermissions.countries.retrieve(IsoCode);
};

export default { metadata, tool, handler };
