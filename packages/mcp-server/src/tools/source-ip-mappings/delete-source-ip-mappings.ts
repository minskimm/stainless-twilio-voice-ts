// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TwilioVoiceOpenAPI from 'stainless-twilio-voice';

export const metadata: Metadata = {
  resource: 'source_ip_mappings',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_source_ip_mappings',
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
  return client.sourceIPMappings.delete(Sid);
};

export default { metadata, tool, handler };
