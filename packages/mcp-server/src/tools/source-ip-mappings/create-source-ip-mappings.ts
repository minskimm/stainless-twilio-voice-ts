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
  name: 'create_source_ip_mappings',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      IpRecordSid: {
        type: 'string',
        description:
          'The Twilio-provided string that uniquely identifies the IP Record resource to map from.',
      },
      SipDomainSid: {
        type: 'string',
        description: 'The SID of the SIP Domain that the IP Record should be mapped to.',
      },
    },
  },
};

export const handler = (client: TwilioVoiceOpenAPI, args: any) => {
  const { ...body } = args;
  return client.sourceIPMappings.create(body);
};

export default { metadata, tool, handler };
