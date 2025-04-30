// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TwilioVoiceOpenAPI from 'stainless-twilio-voice';

export const metadata: Metadata = {
  resource: 'settings',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_settings',
  description: 'Update voice dialing permissions inheritance for the sub-account',
  inputSchema: {
    type: 'object',
    properties: {
      DialingPermissionsInheritance: {
        type: 'boolean',
        description:
          '`true` for the sub-account to inherit voice dialing permissions from the Master Project; otherwise `false`.',
      },
    },
  },
};

export const handler = (client: TwilioVoiceOpenAPI, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.settings.update(body);
};

export default { metadata, tool, handler };
