// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TwilioVoiceOpenAPI from 'twilio-voice-openapi';

const client = new TwilioVoiceOpenAPI({
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource countries', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.dialingPermissions.countries.retrieve('IsoCode');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.dialingPermissions.countries.list();
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
      client.dialingPermissions.countries.list(
        {
          Continent: 'Continent',
          CountryCode: 'CountryCode',
          HighRiskSpecialNumbersEnabled: true,
          HighRiskTollfraudNumbersEnabled: true,
          IsoCode: 'IsoCode',
          LowRiskNumbersEnabled: true,
          Page: 0,
          PageSize: 1,
          PageToken: 'PageToken',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TwilioVoiceOpenAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('fetchHighRiskSpecialPrefixes', async () => {
    const responsePromise = client.dialingPermissions.countries.fetchHighRiskSpecialPrefixes('IsoCode');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('fetchHighRiskSpecialPrefixes: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.dialingPermissions.countries.fetchHighRiskSpecialPrefixes(
        'IsoCode',
        { Page: 0, PageSize: 1, PageToken: 'PageToken' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TwilioVoiceOpenAPI.NotFoundError);
  });
});
