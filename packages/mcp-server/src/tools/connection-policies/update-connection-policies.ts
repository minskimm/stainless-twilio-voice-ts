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
  name: 'update_connection_policies',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      Sid: {
        type: 'string',
      },
      FriendlyName: {
        type: 'string',
        description:
          'A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.',
      },
    },
  },
};

export const handler = (client: TwilioVoiceOpenAPI, args: Record<string, unknown> | undefined) => {
  const { Sid, ...body } = args as any;
  return client.connectionPolicies.update(Sid, body);
};

export default { metadata, tool, handler };
