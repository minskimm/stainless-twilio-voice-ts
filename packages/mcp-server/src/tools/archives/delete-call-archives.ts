// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TwilioVoiceOpenAPI from 'stainless-twilio-voice';

export const metadata: Metadata = {
  resource: 'archives',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_call_archives',
  description:
    'Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.',
  inputSchema: {
    type: 'object',
    properties: {
      Date: {
        type: 'string',
        format: 'date',
      },
      Sid: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: TwilioVoiceOpenAPI, args: Record<string, unknown> | undefined) => {
  const { Sid, ...body } = args as any;
  return client.archives.deleteCall(Sid, body);
};

export default { metadata, tool, handler };
