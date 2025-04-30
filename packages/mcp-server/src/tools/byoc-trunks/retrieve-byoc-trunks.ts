// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TwilioVoiceOpenAPI from 'stainless-twilio-voice';

export const metadata: Metadata = {
  resource: 'byoc_trunks',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_byoc_trunks',
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

export const handler = (client: TwilioVoiceOpenAPI, args: Record<string, unknown> | undefined) => {
  const { Sid, ...body } = args as any;
  return client.byocTrunks.retrieve(Sid);
};

export default { metadata, tool, handler };
