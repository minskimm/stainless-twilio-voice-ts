// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TwilioVoiceOpenAPI from 'twilio-voice-openapi';

const client = new TwilioVoiceOpenAPI({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource archives', () => {
  // skipped: tests are disabled for the time being
  test.skip('deleteCall: only required params', async () => {
    const responsePromise = client.archives.deleteCall('CAE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD', {
      Date: '2019-12-27',
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
  test.skip('deleteCall: required and optional params', async () => {
    const response = await client.archives.deleteCall('CAE1CB97d8EBbDbaAae6d9B1ca0D1cFaAD', {
      Date: '2019-12-27',
    });
  });
});
