// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TwilioVoiceOpenAPI from 'stainless-twilio-voice';

export const metadata: Metadata = {
  resource: 'ip_records',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_ip_records',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      IpAddress: {
        type: 'string',
        description: 'An IP address in dotted decimal notation, IPv4 only.',
      },
      CidrPrefixLength: {
        type: 'integer',
        description:
          'An integer representing the length of the [CIDR](https://tools.ietf.org/html/rfc4632) prefix to use with this IP address. By default the entire IP address is used, which for IPv4 is value 32.',
      },
      FriendlyName: {
        type: 'string',
        description:
          'A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.',
      },
    },
  },
};

export const handler = (client: TwilioVoiceOpenAPI, args: any) => {
  const { ...body } = args;
  return client.ipRecords.create(body);
};

export default { metadata, tool, handler };
