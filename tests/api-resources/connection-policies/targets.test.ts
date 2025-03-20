// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TwilioVoiceOpenAPI from 'stainless-twilio-voice';

const client = new TwilioVoiceOpenAPI({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource targets', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.connectionPolicies.targets.create('NYE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD', {
      Target: 'sip:sip-box.com:1234',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.connectionPolicies.targets.create('NYE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD', {
      Target: 'sip:sip-box.com:1234',
      Enabled: true,
      FriendlyName: 'friendly_name',
      Priority: 1,
      Weight: 20,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.connectionPolicies.targets.retrieve('NEE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD', {
      ConnectionPolicySid: 'NYE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.connectionPolicies.targets.retrieve('NEE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD', {
      ConnectionPolicySid: 'NYE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.connectionPolicies.targets.update('NEE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD', {
      ConnectionPolicySid: 'NYE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.connectionPolicies.targets.update('NEE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD', {
      ConnectionPolicySid: 'NYE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
      Enabled: false,
      FriendlyName: 'updated_name',
      Priority: 2,
      Target: 'sip:sip-updated.com:4321',
      Weight: 10,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.connectionPolicies.targets.list('NYE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD');
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
      client.connectionPolicies.targets.list(
        'NYE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
        { Page: 0, PageSize: 1, PageToken: 'PageToken' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TwilioVoiceOpenAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.connectionPolicies.targets.delete('NEE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD', {
      ConnectionPolicySid: 'NYE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.connectionPolicies.targets.delete('NEE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD', {
      ConnectionPolicySid: 'NYE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD',
    });
  });
});
