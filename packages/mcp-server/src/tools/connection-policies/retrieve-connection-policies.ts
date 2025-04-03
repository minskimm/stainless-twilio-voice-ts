// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TwilioVoiceOpenAPI from 'stainless-twilio-voice';

export const metadata: Metadata = {
  resource: 'connection_policies',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_connection_policies',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      Sid: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: TwilioVoiceOpenAPI, args: any) => {
  const { Sid } = args;
  return client.connectionPolicies.retrieve(Sid);
};

export default { metadata, tool, handler };
