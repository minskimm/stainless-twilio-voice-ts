// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TwilioVoiceOpenAPI from 'twilio-voice-openapi';

const client = new TwilioVoiceOpenAPI({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource byocTrunks', () => {
  // skipped: tests are disabled for the time being
  test.skip('create', async () => {
    const responsePromise = client.byocTrunks.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.byocTrunks.create(
        {
          CnamLookupEnabled: false,
          ConnectionPolicySid: 'NYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          FriendlyName: 'friendly_name',
          FromDomainSid: 'SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          StatusCallbackMethod: 'GET',
          StatusCallbackUrl: 'https://byoc.example.com/twilio/status_callback',
          VoiceFallbackMethod: 'GET',
          VoiceFallbackUrl: 'https://byoc.example.com/twilio/fallback',
          VoiceMethod: 'GET',
          VoiceUrl: 'https://byoc.example.com/twilio/app',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TwilioVoiceOpenAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.byocTrunks.retrieve('BYE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.byocTrunks.update('BYE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.byocTrunks.update(
        'BYE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
        {
          CnamLookupEnabled: true,
          ConnectionPolicySid: 'NYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
          FriendlyName: 'update_name',
          FromDomainSid: 'SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
          StatusCallbackMethod: 'GET',
          StatusCallbackUrl: 'https://byoc.example.com/twilio_updated/status_callback',
          VoiceFallbackMethod: 'GET',
          VoiceFallbackUrl: 'https://byoc.example.com/twilio_updated/fallback',
          VoiceMethod: 'GET',
          VoiceUrl: 'https://byoc.example.com/twilio_updated/app',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TwilioVoiceOpenAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.byocTrunks.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.byocTrunks.list(
        { Page: 0, PageSize: 1, PageToken: 'PageToken' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TwilioVoiceOpenAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.byocTrunks.delete('BYE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
