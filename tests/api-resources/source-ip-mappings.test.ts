// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TwilioVoiceOpenAPI from 'twilio-voice-openapi';

const client = new TwilioVoiceOpenAPI({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sourceIPMappings', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.sourceIPMappings.create({
      IpRecordSid: 'ILaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      SipDomainSid: 'SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
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
    const response = await client.sourceIPMappings.create({
      IpRecordSid: 'ILaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      SipDomainSid: 'SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.sourceIPMappings.retrieve('IBE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.sourceIPMappings.update('IBE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD', {
      SipDomainSid: 'SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
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
    const response = await client.sourceIPMappings.update('IBE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD', {
      SipDomainSid: 'SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.sourceIPMappings.list();
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
      client.sourceIPMappings.list(
        { Page: 0, PageSize: 1, PageToken: 'PageToken' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TwilioVoiceOpenAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.sourceIPMappings.delete('IBE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
