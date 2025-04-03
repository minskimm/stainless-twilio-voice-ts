// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import TwilioVoiceOpenAPI from 'stainless-twilio-voice';

export const metadata: Metadata = {
  resource: 'connection_policies.targets',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_connection_policies_targets',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      ConnectionPolicySid: {
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

export const handler = (client: TwilioVoiceOpenAPI, args: any) => {
  const { ConnectionPolicySid, ...body } = args;
  return client.connectionPolicies.targets.list(ConnectionPolicySid, body);
};

export default { metadata, tool, handler };
