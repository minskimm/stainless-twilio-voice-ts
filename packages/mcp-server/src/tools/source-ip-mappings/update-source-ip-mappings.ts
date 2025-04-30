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
  name: 'update_source_ip_mappings',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      Sid: {
        type: 'string',
      },
      SipDomainSid: {
        type: 'string',
        description: 'The SID of the SIP Domain that the IP Record should be mapped to.',
      },
    },
  },
};

export const handler = (client: TwilioVoiceOpenAPI, args: Record<string, unknown> | undefined) => {
  const { Sid, ...body } = args as any;
  return client.sourceIPMappings.update(Sid, body);
};

export default { metadata, tool, handler };
