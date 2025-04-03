// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TwilioVoiceOpenAPI from 'stainless-twilio-voice';

export const metadata: Metadata = {
  resource: 'byoc_trunks',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_byoc_trunks',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      CnamLookupEnabled: {
        type: 'boolean',
        description:
          'Whether Caller ID Name (CNAM) lookup is enabled for the trunk. If enabled, all inbound calls to the BYOC Trunk from the United States and Canada automatically perform a CNAM Lookup and display Caller ID data on your phone. See [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more information.',
      },
      ConnectionPolicySid: {
        type: 'string',
        description:
          'The SID of the Connection Policy that Twilio will use when routing traffic to your communications infrastructure.',
      },
      FriendlyName: {
        type: 'string',
        description:
          'A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.',
      },
      FromDomainSid: {
        type: 'string',
        description:
          'The SID of the SIP Domain that should be used in the `From` header of originating calls sent to your SIP infrastructure. If your SIP infrastructure allows users to "call back" an incoming call, configure this with a [SIP Domain](https://www.twilio.com/docs/voice/api/sending-sip) to ensure proper routing. If not configured, the from domain will default to "sip.twilio.com".',
      },
      StatusCallbackMethod: {
        type: 'string',
        description: 'The HTTP method we should use to call `status_callback_url`. Can be: `GET` or `POST`.',
        enum: ['GET', 'POST'],
      },
      StatusCallbackUrl: {
        type: 'string',
        description:
          'The URL that we should call to pass status parameters (such as call ended) to your application.',
      },
      VoiceFallbackMethod: {
        type: 'string',
        description: 'The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.',
        enum: ['GET', 'POST'],
      },
      VoiceFallbackUrl: {
        type: 'string',
        description:
          'The URL that we should call when an error occurs while retrieving or executing the TwiML from `voice_url`.',
      },
      VoiceMethod: {
        type: 'string',
        description: 'The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`.',
        enum: ['GET', 'POST'],
      },
      VoiceUrl: {
        type: 'string',
        description: 'The URL we should call when the BYOC Trunk receives a call.',
      },
    },
  },
};

export const handler = (client: TwilioVoiceOpenAPI, args: any) => {
  const { ...body } = args;
  return client.byocTrunks.create(body);
};

export default { metadata, tool, handler };
