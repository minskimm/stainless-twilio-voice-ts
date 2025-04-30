// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import TwilioVoiceOpenAPI from 'stainless-twilio-voice';

export const metadata: Metadata = {
  resource: 'connection_policies.targets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_connection_policies_targets',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      ConnectionPolicySid: {
        type: 'string',
      },
      Sid: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: TwilioVoiceOpenAPI, args: Record<string, unknown> | undefined) => {
  const { Sid, ...body } = args as any;
  return client.connectionPolicies.targets.delete(Sid, body);
};

export default { metadata, tool, handler };
