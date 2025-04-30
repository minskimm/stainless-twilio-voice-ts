// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TwilioVoiceOpenAPI from 'stainless-twilio-voice';

export const metadata: Metadata = {
  resource: 'settings',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_settings',
  description: 'Retrieve voice dialing permissions inheritance for the sub-account',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: TwilioVoiceOpenAPI, args: Record<string, unknown> | undefined) => {
  return client.settings.retrieve();
};

export default { metadata, tool, handler };
