// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TwilioVoiceOpenAPI from 'stainless-twilio-voice';

export const metadata: Metadata = {
  resource: 'connection_policies',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_connection_policies',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      FriendlyName: {
        type: 'string',
        description:
          'A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.',
      },
    },
  },
};

export const handler = (client: TwilioVoiceOpenAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.connectionPolicies.create(body);
};

export default { metadata, tool, handler };
