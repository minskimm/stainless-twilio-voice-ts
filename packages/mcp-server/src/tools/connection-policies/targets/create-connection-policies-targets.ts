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
  name: 'create_connection_policies_targets',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      ConnectionPolicySid: {
        type: 'string',
      },
      Target: {
        type: 'string',
        description:
          'The SIP address you want Twilio to route your calls to. This must be a `sip:` schema. `sips` is NOT supported.',
      },
      Enabled: {
        type: 'boolean',
        description: 'Whether the Target is enabled. The default is `true`.',
      },
      FriendlyName: {
        type: 'string',
        description:
          'A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.',
      },
      Priority: {
        type: 'integer',
        description:
          'The relative importance of the target. Can be an integer from 0 to 65535, inclusive, and the default is 10. The lowest number represents the most important target.',
      },
      Weight: {
        type: 'integer',
        description:
          'The value that determines the relative share of the load the Target should receive compared to other Targets with the same priority. Can be an integer from 1 to 65535, inclusive, and the default is 10. Targets with higher values receive more load than those with lower ones with the same priority.',
      },
    },
  },
};

export const handler = (client: TwilioVoiceOpenAPI, args: Record<string, unknown> | undefined) => {
  const { ConnectionPolicySid, ...body } = args as any;
  return client.connectionPolicies.targets.create(ConnectionPolicySid, body);
};

export default { metadata, tool, handler };
